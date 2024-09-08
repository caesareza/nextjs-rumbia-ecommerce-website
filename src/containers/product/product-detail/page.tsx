import { ChangeEvent, useState } from 'react'
import { useAtom } from 'jotai'
import { formatRupiah } from '@/utils/numberUtils'
import { useDisclosure } from '@/hooks/useDisclosure'
import { cartListAtom } from '@/store/cartAtom'
import { ProductDetailProps } from '@/api/product/types'

import ProductRelated from './components/ProductRelated'
import ModalAddToCart from './components/ModalAddToCart'

export default function Page({ data }: ProductDetailProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [quantity, setQuantity] = useState<number>(1)
    const [cart, setCart] = useAtom(cartListAtom)

    const onHandleAddToCart = async () => {
        const addDataToCart = [
            {
                id: 1,
                name: 'Americano',
            },
        ]
        setCart([...cart, ...addDataToCart])
        onOpen()
    }

    const onHandleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        // Remove leading zeros
        if (value !== '') {
            value = String(Number(value))
        }

        // Update the state with the sanitized value
        setQuantity(Number(value))
    }

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="">
                    <img
                        src="https://static.fore.coffee/product/Americano%20Iced.jpg"
                        alt="Americano Iced"
                        className="w-full rounded"
                    />
                </div>
                <div className="">
                    <h1
                        title="Iced Americano"
                        className="text-3xl font-bold mb-3"
                    >
                        {data.title}
                    </h1>
                    <div className="text-3xl font-bold">
                        {formatRupiah(21000)}
                    </div>
                    <p className="border-t-2 border-b-2 py-8 my-5 truncate">
                        Espresso shot dalam segelas air dengan menjaga ketebalan
                        rasa kopinya
                    </p>
                    <div className="mb-5">
                        <h2 className="text-xl font-bold">Size</h2>
                        <div className="space-x-2 mt-3">
                            <button className="border p-3 hover:bg-lime-300">
                                Regular
                            </button>
                            <button className="border p-3 hover:bg-lime-300">
                                Large
                            </button>
                        </div>
                    </div>
                    <div className="jumlah">
                        <h2 className="text-xl font-bold">Jumlah</h2>
                        <input
                            className="border border-slate-500 p-2 my-3"
                            value={quantity}
                            onChange={onHandleChangeQuantity}
                        />
                        <div>Stok Tersedia</div>
                        <div className="flex space-x-3 mt-5">
                            <button className="border p-3 font-bold">
                                Tambahkan ke Wishlist
                            </button>
                            <button
                                className="bg-red-600 p-3 font-bold text-white disabled:bg-slate-300"
                                onClick={onHandleAddToCart}
                                disabled={quantity === 0}
                            >
                                Tambahkan ke Keranjang
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ProductRelated productId={data.id} />

            <ModalAddToCart isOpen={isOpen} onClose={onClose} />
        </>
    )
}
