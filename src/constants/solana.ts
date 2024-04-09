import { Cluster, clusterApiUrl } from '@solana/web3.js'

export enum DappEnvironment {
  'staging' = 'staging',
  'production' = 'production',
  'development' = 'development',
}

export const CLUSTER: Cluster =
  process.env.NEXT_PUBLIC_ENVIRONMENT === DappEnvironment.production ? 'mainnet-beta' : 'devnet'

export const SOLANA_HOST = clusterApiUrl(CLUSTER)
