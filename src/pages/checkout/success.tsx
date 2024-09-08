import { NextPage } from 'next'
import { Logo } from '@/components/common'

const CheckoutSuccessPage: NextPage = () => (
    <section className="flex flex-col items-center py-20 space-y-2 text-center">
        <Logo />
        <h1 className="font-bold text-5xl">Thank You</h1>
        <p className="py-5">
            Payment success <br />
            Thank you, please enjoy your coffee
        </p>
        <div
            id="va-number"
            className="border border-slate-300 bg-slate-100 px-10 py-3 rounded"
        >
            BCA Virtual Account <br />
            01919992929290
        </div>
    </section>
)

export default CheckoutSuccessPage
