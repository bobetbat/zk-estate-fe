import { Hash } from "../types"

export const short: (hash: string | Hash) => string = (hash) => {
  return hash.slice(0, 5) + '...' + hash.slice(-4)
}
