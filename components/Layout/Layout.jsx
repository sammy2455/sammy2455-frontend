import Head from "next/head";
import styles from "../../styles/Index.module.css";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Sammy - Home</title>
            </Head>
            <div className={styles.container} >
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