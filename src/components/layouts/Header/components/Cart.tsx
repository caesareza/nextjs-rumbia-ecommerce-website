import CartIcon from '@/components/icons/CartIcon'
import Link from 'next/link'

import { useAtomValue } from 'jotai'
import { cartTotalAtom } from '@/store/cartAtom'

export default function Cart() {
    const cartTotal = useAtomValue(cartTotalAtom)

    return (
        <div className="relative">
            <span className="counter absolute bg-red-400 rounded-full px-1.5 -top-2 -right-3 text-center text-[10px] text-white">
                {cartTotal > 0 && cartTotal}
            </span>
            <Link href="/cart">
                <CartIcon fontSize="25" />
            </Link>
        </div>
    )
}
