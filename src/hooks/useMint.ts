import * as anchor from '@coral-xyz/anchor'
import { AnchorProvider, BN, Program, web3 } from '@coral-xyz/anchor'
import { DcarbonProgram } from '../context/dcarbon_program'
import idl from '../context/dcarbon_program.json'

import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token'
import { Keypair } from '@solana/web3.js'

import { SOLANA_HOST } from '@/constants/solana'
import userService from '@/services/userServices'
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const programID = new web3.PublicKey(process.env.PROGRAM_ID || 'k2tYYVZSVqZyMaaDNTQ3owSKqTaGSmmbWRnfjnVn2ri')

const programIndex = parseInt(process.env.PROGRAM_INDEX || '4')

const useMintNFT = ({
  projectId,
  // certificateId,
  // deviceId,
  amount,
}: {
  projectId: string
  // certificateId: string
  // deviceId: string
  amount: number
}) => {
  const SYSTEM_PROGRAM_ID = new web3.PublicKey('11111111111111111111111111111111')

  const connection = new web3.Connection(SOLANA_HOST, 'confirmed')

  const { publicKey } = useWallet()

  const auchorWallet: any = useAnchorWallet()

  const provider = new AnchorProvider(connection, auchorWallet, {
    preflightCommitment: 'recent',
    commitment: 'processed',
  })

  const program = new Program(idl as DcarbonProgram, programID, provider)

  // const [signature, setSignature] = useState({
  //   signature: [],
  //   recoveryId: 0,
  //   price: 0,
  // })

  // const fetchSignature = async () => {
  //   if (publicKey) {
  //     const response = await userService.getSignature({ projectId, buyerPub: publicKey.toString(), amount })
  //     if (response) {
  //       setSignature(response)
  //     }
  //   }
  // }

  const mint = web3.PublicKey.findProgramAddressSync(
    [Buffer.from('mint'), new BN(programIndex).toArrayLike(Buffer, 'le', 1)],
    programID
  )[0]

  const [tokenAccount] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('tokenAccount'), new BN(programIndex).toArrayLike(Buffer, 'le', 1)],
    programID
  )
  const [authorityPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('authorityPda'), new BN(programIndex).toArrayLike(Buffer, 'le', 1)],
    programID
  )
  const [walletPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('walletPda'), new BN(programIndex).toArrayLike(Buffer, 'le', 1)],
    programID
  )

  const [certificates, setCertificates] = useState({})
  useEffect(() => {
    if (localStorage.getItem('certificates') !== null) {
      const listCertificates = JSON.parse(localStorage.getItem('certificates') || '{}')
      if (Object.keys(listCertificates).length >= 10) {
        setCertificates({})
      } else {
        setCertificates(listCertificates)
      }
    }
  }, [])

  const mintNFT = async (certificateId: string) => {
    if (publicKey) {
      const signature = await userService.getSignature({ projectId, buyerPub: publicKey.toString(), amount })
      if (signature) {
        const MintNftParams = {
          programIndex: programIndex,
          amount: new anchor.BN(amount * 10 ** parseInt(process.env.CARBON_TOKEN_DECIMAL || '9')),
          price: new anchor.BN(signature.price * web3.LAMPORTS_PER_SOL),
          signature: signature.signature,
          recoveryId: signature.recoveryId,
          projectId: projectId,
          // certificateId: certificateId,
          // deviceId: [Number(deviceId)],
        }
        const newMintNFT = Keypair.generate()
        const tokenAccountNFT = await getAssociatedTokenAddress(newMintNFT.publicKey, publicKey)
        if (tokenAccountNFT) {
          // const transaction = new web3.Transaction().add(
          try {
            const tx = await program.methods
              .mintNft({ ...MintNftParams, certificateId: certificateId })
              .accounts({
                mintNft: newMintNFT.publicKey,
                tokenAccountNft: tokenAccountNFT,
                mintPda: mint,
                tokenAccountPda: tokenAccount,
                walletPda: walletPda,
                authorityPda: authorityPda,
                buyer: publicKey || '',
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                systemProgram: SYSTEM_PROGRAM_ID,
                tokenProgram: TOKEN_PROGRAM_ID,
              })
              .signers([newMintNFT])
              .rpc()
            console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`)
            if (tx) {
              toast.success('Mint NFT successfully', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
              const newListCertificates = { ...certificates, [certificateId]: newMintNFT.publicKey.toString() }
              setCertificates(newListCertificates)
              localStorage.setItem('certificates', JSON.stringify(newListCertificates))
              return tx
            }
          } catch (error) {
            console.log('error', error)
            toast.error('Failed to mint NFT', {
              position: 'bottom-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            })
          }
          // const latestBlockhash = await connection.getLatestBlockhash()

          // transaction.recentBlockhash = latestBlockhash.blockhash
          // transaction.feePayer = publicKey || undefined
          // const signedTransaction = signTransaction && (await signTransaction(transaction))

          // if (signedTransaction) {
          //   console.log('signedTransaction', signedTransaction)
          //   try {
          //     // const rawTransaction = signedTransaction.serialize()
          //     const tx = await web3.sendAndConfirmTransaction(connection, signedTransaction, [newMintNFT])

          //     console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`)
          //   } catch (error) {
          //     console.log('error', error)
          //     toast.error('Failed to mint NFT', {
          //       position: 'bottom-right',
          //       autoClose: 3000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //     })
          //   }
          // }
        }
      }
    }
  }

  return { mintNFT }
}

export default useMintNFT
