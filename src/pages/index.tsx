import { useState, useEffect } from 'react'

export default function Home() {
    const isMobile: boolean = false
    const userName: string = 'Nisa'
    const isAlert: boolean = true

    const handleAlert = () => alert('hi i am here')
    const handleAlertSuccess = () => {
        /*
        your code here
        post to server
        validation
        etc
         */
        alert('post to server success')
    }

    const [lokasi, setLokasi] = useState<string>('Denpasar')
    // console.log('lokasi=',lokasi)

    const handleChangeLocation = (namaLokasi: string) => {
        console.log('handleChangeLocation', namaLokasi)
        setLokasi(namaLokasi)
    }

    const fetchPost = () => {
        console.log('ini fungsi untuk ambil list artikel dari API')
    }

    useEffect(() => {
        fetchPost()
    }, [lokasi])

    return (
        <section className="home">
            {isAlert && (
                <div className="bg-amber-200 p-5">
                    Nantikan promo iphone terbaru
                </div>
            )}
            {isMobile ? (
                <section>
                    <h1>Ini tampilan mobile</h1>
                    <p>Hi {userName}</p>
                </section>
            ) : (
                <section>
                    <h1>Ini tampilan desktop</h1>
                    <p>Hi {userName}</p>
                </section>
            )}
            <h2>Hi sekarang aku lagi di {lokasi}</h2>
            <button onClick={handleAlert}>Click Me</button>
            <button onClick={handleAlertSuccess}>Save</button>
            <button onClick={() => handleChangeLocation('Kuta')}>Kuta</button>
            <button onClick={() => handleChangeLocation('Bedugul')}>
                Bedugul
            </button>
        </section>
    )
}
