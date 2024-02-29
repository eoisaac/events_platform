export const getFileFromUrl = async (url: string) => {
  const res = await fetch(url)
  const blob = await res.blob()
  return new File([blob], 'image', { type: blob.type })
}
