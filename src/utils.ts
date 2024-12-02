export default function sleep(ms:number) {
  return new Promise((res, rej) => {
    setTimeout(() => res(null), ms)
  })
}