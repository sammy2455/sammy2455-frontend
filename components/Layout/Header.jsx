import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Header () {

    const router = useRouter();

    const routes = [
        {
            "name": "About",
            "route": "/home",
        },
        {
            "name": "Projects",
            "route": "/projects",
        },
        {
            "name": "Resume",
            "route": "/resume",
        }
    ];

    return (
        <div className="card-body">
            <Link href="/">
                <a>
                    <Image src="https://github.com/sammy2455.png" alt="Sammy photo" width={48} height={48} />
                </a>
            </Link>
            <h3 className="card-title mb-2">Sammy</h3>
            <nav className="nav text-dark">
                {routes.map((route) =>
                    <Link href={route.route} key={route.name}>
                        <a className={`nav-link p-0 py-2 pe-3 ${(router.pathname.includes(route.route))? 'text-dark' : 'text-muted'}`} aria-current="page">{route.name}</a>
                    </Link>
                )}
            </nav>
        </div>
    )
}