import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Sammy</title>
                <link rel="icon" href="https://github.com/sammy2455.png" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
