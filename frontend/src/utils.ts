export const api = async (
  input: RequestInfo,
  init?: RequestInit | undefined
) => {
  const res = await fetch(input, init)
  if (!res.ok) throw new Error('Network response was not ok')

  return await res.json()
}
