import { getProfile } from '@/actions/user.action'
import { useAppDispatch } from '@/hooks/hooks'
import { setProfile } from '@/reducers/userSlice'
import authService from '@/services/authService'
import { LocalStorage } from '@/utils/LocalStorage'
import { addressWalletCompact } from '@/utils/format'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useEffect, useMemo, useState } from 'react'

const BtnConnectWallet = () => {
  const dispatch = useAppDispatch()
  const { setVisible } = useWalletModal()
  const { disconnect, connected, publicKey, signMessage } = useWallet()
  const [isClickedConnect, setIsClickedConnect] = useState<boolean>(false)
  const connectFlag = useMemo(() => isClickedConnect && connected, [isClickedConnect, connected])
  useEffect(() => {
    const getSignMessage = async () => {
      try {
        const response = await authService.sign()
        if (response?.data) {
          return {
            message: response?.data?.sign_message,
            nonce: response?.data?.nonce,
          }
        }
      } catch (error) {
        disconnect()
        LocalStorage.clearToken()
      }
    }
    const verifySignMessage = async () => {
      try {
        const sign = await getSignMessage()

        const encodedMessage = new TextEncoder().encode(sign?.message)
        const signature = signMessage && (await signMessage(encodedMessage))
        if (signature) {
          const decodedSignature = btoa(String.fromCharCode(...Array.from(new Uint8Array(signature))))

          const res = await authService.signIn({
            signature: decodedSignature,
            address: publicKey?.toString() || '',
            nonce: sign?.nonce,
          })

          if (res) {
            // setAddress(wallet.publicKey.toString())
            LocalStorage.setToken(res?.data?.access_token)
            dispatch(getProfile())
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (connectFlag) {
      verifySignMessage()
    }
  }, [connectFlag, disconnect, publicKey, setVisible, signMessage, dispatch])

  return (
    <button
      onClick={() => {
        if (connected) {
          disconnect()
          dispatch(setProfile(undefined))
          LocalStorage.clearToken()
        } else {
          setVisible(true)
          setIsClickedConnect(true)
        }
      }}
      className='hidden h-12 w-fit rounded-lg border border-black bg-white px-4 py-3 text-base font-medium leading-[19.36px] tracking-[-0.64px] text-black drop-shadow-[0px_4px_0px_#000000] md:block'
    >
      <p className='font-inter'>{publicKey ? addressWalletCompact(publicKey.toString()) : 'Connect Wallet'}</p>
    </button>
  )
}

export default BtnConnectWallet
