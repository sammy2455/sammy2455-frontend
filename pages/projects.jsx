import Head from "next/head";
import Layout from "../components/Layout/Layout";
import {useEffect, useState} from "react";
import axiosClient from "../services/Axios/axiosClient";

export default function Projects() {

    const [repos, setRepos] = useState([]);
    //const [error, setError] = useState(false);

    useEffect(() => {
        handleRepos();
    }, []);

    async function handleRepos() {
        await axiosClient.get('https://api.github.com/users/sammy2455/repos')
            .then(response => {
                setRepos(response.data);
            })
            .catch(error => {
                setRepos(null);
            })
    }

    return (
        <Layout>
            <Head>
                <title>Sammy - Projects</title>
            </Head>
            {(repos)?
                <div className="list-group list-group-numbered">
                    {repos.map(r =>
                        <a href={r.html_url} target="_blank" rel="noreferrer noopener" key={r.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{r.name}</div>
                                {r.description}
                            </div>
                            <span className="badge bg-primary rounded-pill">{r.language}</span>
                        </a>
                    )}
                </div>
                :
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        <span className="badge bg-primary rounded-pill">14</span>
                    </li>
                </ol>
            }
        </Layout>
    )
}