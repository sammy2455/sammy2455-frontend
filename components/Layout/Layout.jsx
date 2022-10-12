import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Sammy - Home</title>
            </Head>
            <div className="mt-5">
                <div className="container rounded-4 mw-100" style={{width: "540px"}}>
                    <div className="card border-0">
                        <Header />
                        <hr/>
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}