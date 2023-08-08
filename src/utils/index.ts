export const formatBytes = (bytes: string | number, decimals: number = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(Number(bytes)) / Math.log(k))

  return `${parseFloat((Number(bytes) / Math.pow(k, i)).toFixed(dm))} ${
    sizes[i]
  }`
}
