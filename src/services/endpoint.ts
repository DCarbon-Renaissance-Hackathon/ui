const ROUTER_DAPP = 'v1.1'
export const GET_LIST_DEVICE = `${ROUTER_DAPP}/iots`
export const GET_DEVICE_DETAIL = `${ROUTER_DAPP}/iots`
export const GET_CARBON_AVAILABLE = `${ROUTER_DAPP}/iot-op/mint-sign`
export const GET_LIST_PROJECT = `${ROUTER_DAPP}/project`
export const GET_PROJECT_DETAIL = `${ROUTER_DAPP}/project`
export const GET_LIST_PROJECT_DEVICE = `${ROUTER_DAPP}/iots`
export const GET_LOG_DATA = `v1/iots/290/minted`

const ROUTER_CORE = 'core'
export const SIGN = `${ROUTER_CORE}/auth/sign`
export const SIGN_IN = `${ROUTER_CORE}/auth/sign_in`
export const GET_PROFILE = `${ROUTER_CORE}/user/me`
export const UPDATE_PROFILE = `${ROUTER_CORE}/user/me`

export const GET_CERTIFICATE_OF_USER = `${ROUTER_CORE}/certificate/me`
export const GET_DETAIL_CERTIFICATE = `${ROUTER_CORE}/certificate/detail`
export const GET_LIST_TRANSACTION = `${ROUTER_CORE}/certificate/transaction/me`
export const SUBMIT_CERTIFICATE_INDIVIDUAL = `${ROUTER_CORE}/certificate/individual`
export const SUBMIT_CERTIFICATE_CORPORATE = `${ROUTER_CORE}/certificate/corporate`

export const GET_SIGNATURE = `signature/signature`
