export default function Dashboard(){
    const isLoggedIn: boolean = true;
    const user: string = "Nisa";

    return(
        <section>
            <h1>Dashboard</h1>
            <p>Read more to see detail of your report</p>

            {(() => {
                if (isLoggedIn) {
                    return <div>Hi {user}</div>
                } else {
                    return (
                        <>
                            <div>Hi {user},  you can not access this page</div>
                            <p>Login first</p>
                        </>
                    )
                }
            })()}

        </section>
    )
}