import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const cartListAtom = atomWithStorage<
    Array<{ id: number; name: string }>
>('cart', [])
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
