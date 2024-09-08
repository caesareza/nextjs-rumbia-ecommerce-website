import { MetaHead } from '@/components/common'

export default function About() {
    return (
        <>
            <MetaHead title="About Fore Coffee" description="desc" />
            <section className="flex">
                <img
                    src="/images/about-us/ourstory.png"
                    alt="Our story"
                    className="w-full h-[510px] object-cover"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-green-800 font-bold text-5xl mb-5">
                        Our Story
                    </h1>
                    <p className="text-2xl text-lime-600">
                        Get to know about us, stores, environment, and people
                        behind it!
                    </p>
                </div>
            </section>
        </>
    )
}
