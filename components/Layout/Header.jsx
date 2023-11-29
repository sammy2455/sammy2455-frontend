import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Header () {

    const router = useRouter();

    return (
        <div className="card-body">
            <Link href="/">
                <a>
                    <Image src="https://github.com/sammy2455.png" alt="Sammy photo" width={48} height={48} />
                </a>
            </Link>
            <h3 className="card-title mb-2">Sammy</h3>
            <nav className="nav text-dark">
                <Link href={`/home`} key={`About`}>
                    <a className={`nav-link p-0 py-2 pe-3 ${(router.pathname.includes(`/home`))? 'text-dark' : 'text-muted'}`} aria-current="page">{`About`}</a>
                </Link>
                    <Link href={`/projects`} key={`Projects`}>
                    <a className={`nav-link p-0 py-2 pe-3 ${(router.pathname.includes(`/projects`))? 'text-dark' : 'text-muted'}`} aria-current="page">{`Projects`}</a>
                </Link>
                <a className="nav-link p-0 py-2 pe-3 text-muted" href="#" rel="noopener noreferrer">{`Resume`}</a>
            </nav>
        </div>
    )
}
