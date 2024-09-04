import { useAtomValue } from 'jotai'
import { cartListAtom, cartTotalAtom } from '@/store/cartAtom'

export default function Cart() {
    const cart = useAtomValue(cartListAtom)
    const cartTotal = useAtomValue(cartTotalAtom)

    function cartRenderer() {
        if (cartTotal <= 0) {
            return <>Keranjang kosong</>
        }

        // eslint-disable-next-line
        return cart?.map((item: any, index: number) => (
            <div className="item flex space-x-3" key={index}>
                <div className="w-36 h-36">
                    <img
                        src="https://static.fore.coffee/product/Americano%20Iced.jpg"
                        alt="Americano Iced"
                        className="w-full object-cover"
                    />
                </div>
                <div>
                    <h2 title="Iced Americano" className="font-bold text-xl">
                        {item.name}
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
            <div className="flex space-x-5">
                <div className="w-full">{cartRenderer()}</div>
                <div className="flex-none">
                    <div className="summary border w-[250px] p-5 mb-3">
                        <h1>Order Summary</h1>
                    </div>
                    <button className="w-full bg-red-600 p-2 text-white font-bold">
                        Lanjutkan ke Pembayaran
                    </button>
                </div>
            </div>
        </>
    )
}
