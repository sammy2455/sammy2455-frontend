import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Projects(props) {

    const repositories = [
        {
            key: 1,
            name: "Samara",
            description: "Storage server with an API to upload and compress images for a school web project",
            url: "https://github.com/sammy2455/amaris-symfony",
            label: "Ver repositorio",
            areas: ["back-end", "operating systems administration"],
        },
        {
            key: 2,
            name: "Personal Website",
            description: "A brief biography, projects and resume, made in ReactJS. ",
            url: "https://www.sammy2455.com/",
            label: "Estas ahí",
            areas: ["back-end", "front-end", "full-stack"],
        },
        {
            key: 3,
            name: "Movies server",
            description: "This project uses Emby as the basis for providing the multimedia service, configured on a Windows server behind a proxy server and a load balancer on Linux Ubuntu",
            url: "https://emby.he-llo.com/",
            label: "Echa un vistazo",
            areas: ["back-end", "operating systems administration", "infrastructure"],
        },
        {
            key: 4,
            name: "Rommie",
            description: "A small project for anyone to register and get 100mb to put their home page on the web",
            url: "#",
            label: "Still in design",
            areas: ["back-end", "front-end", "operating systems administration", "infrastructure"],
        },
    ];

    return (
        <Layout>
            <Head>
                <title>Sammy - Projects</title>
            </Head>
            <div className="list-group list-group-numbered">
                {repositories.map(repository =>
                    <div className="card w-auto mb-3" key={repository.key}>
                        <div className="card-body">
                            <h5 className="card-title">{repository.name}</h5>
                            {repository.areas.map(area =>
                                <span key={area} className="badge text-bg-secondary mb-2 me-1">{area}</span>
                            )}
                            <p className="card-text">{repository.description}</p>
                            <a className="card-link" target="_blank" href={repository.url} rel="noopener noreferrer">{repository.label}</a>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}