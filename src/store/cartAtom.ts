import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { ProductProps } from '@/api/product/types'

export const cartListAtom = atomWithStorage<ProductProps[]>('cart', [])
export const cartTotalAtom = atom<number>((get) => get(cartListAtom).length)
// export const cartTotalPriceAtom = atom<number>((get) => {
//     let total = 0
//     const userCart = get(cartListAtom)
//     const userCartTotal = get(cartTotalAtom)
//
//     if (userCartTotal === 0) return total
//
//     const sumCart = array1.reduce(
//         (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
//         total,
//     );
// })
