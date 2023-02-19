import Head from "next/head";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Página de Contato</title>
      </Head>
      <div className="bg-gray-300 p-8 min-h-screen">
        <h1 className="text-3xl font-bold">Redes Sociais:</h1>
        <div className="mt-4">
          <span className="inline-block m-1">
            <FaFacebook size={45} className="inline" />
            <Link
              href="https://www.facebook.com/igrejaxv/"
              target="_blank"
            >
              <p className="inline ml-2 font-semibold hover:font-bold">
                Igreja XV de Novembro
              </p>
            </Link>
          </span>

          <span className="flex m-1">
            <FaInstagram size={45} className="inline" />
            <Link href="https://www.instagram.com/igrejaxv/" target="_blank">
              <p className="inline ml-2 font-semibold hover:font-bold">
                Igreja XV de Novembro - Instagram
              </p>
            </Link>
          </span>

          <span className="flex m-1">
            <FaYoutube size={45} className="inline" />
            <Link href="https://www.youtube.com/@IgrejaXV" target="_blank">
              <p className="inline ml-2 font-semibold hover:font-bold">
                Igreja XV de Novembro - Youtube
              </p>
            </Link>
          </span>

          <h1 className="text-3xl font-bold">Contato do Pastor:</h1>

          <span className="flex m-1">
            <FaWhatsapp size={45} className="inline" />
            <Link href="https://wa.me/+5521975538121">
                <p className="inline ml-2 font-semibold hover:font-bold relative top-2">
                    Whatsapp do Pastor Gilberto.
                </p>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}