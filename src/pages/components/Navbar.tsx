import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-4 pr-[1.2em] mb-8 bg-black-smooth text-white iphone:-mr-[6rem]">
            <div className="flex justify-center items-center">
                <h1 className="lg:ml-2 md:ml-[3em] sm:ml-[3em] iphone:-ml-3">Igreja XV</h1>
            </div>

            <ul className="flex list-none">
                <li className="lg:mr-[1.3em] max-sm:[mr-2] iphone:mr-0">
                <Link
                    href="/"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Home
                </Link>
                </li>

                <li className="lg:mr-[1.3em] max-sm:mr-2 iphone:mr-0">
                <Link
                    href="/about"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Sobre
                </Link>
                </li>

                <li className="lg:mr-[1.3em] max-sm:mr-1 iphone:mr-0 iphone:-ml-1">
                <Link
                    href="/contact"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Contato
                </Link>
                </li>

                <li className="lg:mr-[1.3em] max-sm:-mr-2 iphone:-mr-1">
                <Link
                    href="/"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Doação
                </Link>
                </li>

                <li className="lg:mr-[1.3em] max-sm:-mr-2 iphone:-mr-1">
                <Link
                    href="/"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Oração
                </Link>
                </li>

                <li className="lg:mr-[1.3em] max-sm:-mr-2 iphone:-mr-3">
                <Link
                    href="/"
                    className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white"
                >
                Agenda 
                </Link>
                </li>
            </ul>
        </nav>
    )
}