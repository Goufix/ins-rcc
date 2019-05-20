export default async function ApiFetch(url) {
  const body = await fetch(url)
  let obj = JSON.parse(body)
  return obj
}
