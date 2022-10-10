import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function ResumeDev() {
    return (
        <Layout>
            <Head>
                <title>Sammy - Resume</title>
            </Head>
            <div className="card-body">
                <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </Layout>
    )
}