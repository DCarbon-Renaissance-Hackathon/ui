export const splitPath = (path: string): string | string[] => {
  return path.split('/') || []
}

export function convertToTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000)
}
export const formatDateToShowUI = (dateString: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(dateString)

  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${month} ${day}`
}

export function compactNumber(value: number): string {
  // Suffixes for different scales
  const precision: number = 0
  const suffixes = ['', 'K', 'M', 'B', 'T', 'P', 'E']
  // Determine the scale based on the absolute value
  const scale = !value ? 0 : Math.floor(Math.log10(Math.abs(value)) / 3)

  // Ensure scale is within the bounds of the suffixes array
  if (scale >= suffixes.length) {
    throw new Error('Number is too large to format')
  }

  // Calculate the formatted number
  const formattedNumber = (value / Math.pow(10, scale * 3)).toFixed(precision)
  // Append the appropriate suffix
  return `${formattedNumber}${suffixes[scale]}`
}

export function convertUnixTimestampToDate(unixTimestamp: string): string {
  const timestamp = parseInt(unixTimestamp)

  if (isNaN(timestamp)) {
    return unixTimestamp
  }

  const date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const addressWalletCompact = (address: string) => {
  return `${address?.slice(0, 6)}...${address?.slice(address.length - 4, address.length)}`
}

export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const hexToDecimal = (hex: string): number => {
  // Remove any leading '0x' or '#' characters
  hex = hex.replace(/^0x|#/, '')
  // Parse the hexadecimal string to decimal
  return parseInt(hex, 16)
}
