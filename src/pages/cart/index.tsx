import { useAtomValue } from 'jotai'
import {
    cartListAtom,
    cartTotalAtom,
    cartTotalPriceAtom,
} from '@/store/cartAtom'
import { clsx } from 'clsx'
import { formatRupiah } from '@/utils/numberUtils'
import { useRouter } from 'next/router'

export default function Cart() {
    const cart = useAtomValue(cartListAtom)
    const cartTotal = useAtomValue(cartTotalAtom)
    const cartTotalPrice = useAtomValue(cartTotalPriceAtom)

    const router = useRouter()

    const handleContinueCheckout = () => {
        // this will be your function to place you code logic
        // and POST to API
        // show alert if we have any error
        // also you can show alert message if success then
        // we can use the redirect router to navigate to checkout page or success page
        router.push('/checkout')
    }

    function cartRenderer() {
        if (cartTotal <= 0) {
            return <>Keranjang kosong</>
        }

        return cart?.map((item) => (
            <div
                className="item flex space-x-3 border-b pb-5 mb-5 last:p-0 last:m-0 last:border-none"
                key={item.id}
            >
                <div className="w-36 h-36">
                    <img
                        src="https://static.fore.coffee/product/Americano%20Iced.jpg"
                        alt="Americano Iced"
                        className="w-full object-cover"
                    />
                </div>
                <div>
                    <h2
                        title="Iced Americano"
                        className="font-bold text-xl mb-3"
                    >
                        {item.title}
                    </h2>
                    <div>Regular - Ice</div>
                    <div>Jumlah Pesanan: 1</div>
                </div>
            </div>
        ))
    }

    return (
        <>
            <h1 title="Your Cart" className="text-3xl font-bold mb-3">
                Your Cart
            </h1>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0">
                <div className="w-full border p-5">{cartRenderer()}</div>
                <div className="w-full md:flex-none md:w-[300px]">
                    <div className="summary border p-5 mb-3 font-bold">
                        <h1>RINGKASAN PESANAN: {cartTotal}</h1>
                        <div className="mt-5">
                            TOTAL PESANAN {formatRupiah(cartTotalPrice)}
                        </div>
                    </div>
                    <button
                        className={clsx(
                            'w-full bg-red-600 p-2 text-white font-bold',
                            cartTotal === 0 && 'disabled:bg-slate-300'
                        )}
                        disabled={cartTotal === 0}
                        onClick={handleContinueCheckout}
                    >
                        Lanjutkan ke Pembayaran
                    </button>
                </div>
            </div>
        </>
    )
}
