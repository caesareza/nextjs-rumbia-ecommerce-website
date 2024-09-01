import CartIcon from '@/components/icons/CartIcon'
import Link from 'next/link'

export default function Cart() {
    return (
        <div className="relative">
            <span className="counter absolute bg-red-400 rounded-full p-1 px-1.5 -top-2 -right-3 text-center text-[10px] text-white">
                12
            </span>
            <Link href="/">
                <CartIcon fontSize="25" />
            </Link>
        </div>
    )
}
