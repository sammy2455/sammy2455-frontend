import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
      <Layout>
          <Head>
              <title>Sammy - Home</title>
          </Head>
          <div className="card-body">
              <p className="card-text">
                  I am Sammy, I love programming, reading and taking pictures.
                  You can follow me on <a href="https://twitter.com/samii2455" target="_blank" rel="noreferrer noopener">Twitter</a>,
                  check out my projects on <a href="https://github.com/sammy2455" target="_blank" rel="noreferrer noopener">Github</a> or
                  contact me by <a href="mailto:sami-camaton@hotmail.com" target="_blank" rel="noreferrer noopener">email</a>.
              </p>
              <p className="card-text">
                  Professionally I'm an IT Engineer, part of the software development team at <a href="https://www.he-llo.com" target="_blank" rel="noreferrer noopener">Hello</a>.
                  I'm dedicated to writing backend, designing databases, configuring servers and deploying applications.
                  Always keeping in mind simplicity, speed and security. Currently I'm interested in web development,
                  artificial intelligence and high concurrency architecture.
              </p>
              <p className="card-text">
                  <img className="rounded-3 mw-100" src="/rubik.gif" alt="Cover photo" style={{width: "540px"}}/>
              </p>
          </div>
      </Layout>
  )
}
