import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { ProductProps } from '@/api/product/types'

export const cartListAtom = atomWithStorage<ProductProps[]>('cart', [])
export const cartTotalAtom = atom<number>((get) => get(cartListAtom).length)
export const cartTotalPriceAtom = atom<number>((get) =>
    get(cartListAtom)?.reduce((previousValue, currentValue) => {
        if (!currentValue) return 0
        return previousValue + (currentValue.price ?? 0)
    }, 0)
)
