import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRouter } from 'next/router'

interface ModalAddToCartProps {
    isOpen: boolean
    onClose: () => void
}

export default function ModalAddToCart({
    isOpen,
    onClose,
}: ModalAddToCartProps) {
    const router = useRouter()

    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={onClose}
        >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-white/65">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-black/10 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg"
                    >
                        <DialogTitle
                            as="h3"
                            className="text-base/7 font-medium text-black/60"
                        >
                            1 PRODUK DITAMBAHKAN KE KERANJANG ANDA
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-black/60">
                            Your coffee will be ready in 5 minutes, after you
                            complete the payment.
                        </p>
                        <div className="mt-4 space-x-3">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                onClick={onClose}
                            >
                                Got it, thanks!
                            </Button>
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-lime-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-lime-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-lime-700"
                                onClick={() => router.push('/cart')}
                            >
                                View Cart
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
