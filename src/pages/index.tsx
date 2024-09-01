import { MetaHead } from '@/components/common'

export default function Home() {
    return (
        <>
            <MetaHead />
            <section className="home">
                <div className="banner flex flex-col md:flex-row items-center">
                    <div className="heading space-y-3">
                        <h1 className="text-green-800 font-bold text-5xl">
                            Grind The Essentials
                        </h1>
                        <h2 className="text-2xl text-lime-600">
                            Made with Indonesia’s Finest Beans for your everyday
                            modern coffee experience
                        </h2>
                    </div>
                    <div className="image">
                        <img
                            src="/banner/fore-coffee-late-art.png"
                            alt="fore coffee late art"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
