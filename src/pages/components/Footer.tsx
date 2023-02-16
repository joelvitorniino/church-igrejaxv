import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <Image
            src="/images/church_xv.svg"
            width="40"
            height="40"
            className="mr-3"
            alt="Igreja XV Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Igreja XV
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Contato
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Doação
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Oração
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block relative -top-2 text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Igreja XV &copy; 2023{" "}
      </span>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Site feito por{" "}
        <Link
          href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/"
          className="hover:underline"
        >
          Joel Vitor!
        </Link>
      </span>
    </footer>
  );
}
