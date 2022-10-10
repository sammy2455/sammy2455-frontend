import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Sammy - Error 404</title>
            </Head>
            <div className="card-body">
                <p className="card-text">
                    Sorry the page you are looking for does not exist.
                </p>
                <p className="card-text">
                    <img className="rounded-3 mw-100" src="/error.gif" alt="Cover photo" style={{width: "160px"}}/>
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Go somewhere</a>
                </Link>
            </div>
        </Layout>
    )
}