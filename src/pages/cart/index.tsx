import { useAtomValue } from 'jotai'
import { cartListAtom, cartTotalAtom } from '@/store/cartAtom'
import { clsx } from 'clsx'

export default function Cart() {
    const cart = useAtomValue(cartListAtom)
    const cartTotal = useAtomValue(cartTotalAtom)

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
                    <h2 title="Iced Americano" className="font-bold text-xl">
                        {item.title}
                    </h2>
                    <div>Regular - Ice</div>
                    <div>Quantity: 1</div>
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
                <div className="w-full md:flex-none md:w-[250px]">
                    <div className="summary border p-5 mb-3">
                        <h1>Order Summary</h1>
                    </div>
                    <button
                        className={clsx(
                            'w-full bg-red-600 p-2 text-white font-bold',
                            cartTotal === 0 && 'disabled:bg-slate-300'
                        )}
                        disabled={cartTotal === 0}
                    >
                        Lanjutkan ke Pembayaran
                    </button>
                </div>
            </div>
        </>
    )
}
