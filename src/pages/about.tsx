import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Página Sobre</title>
      </Head>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="md:w-1/2 px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Localidade:
              </h1>
              <p className="text-gray-600 leading-loose mb-1">
                A Igreja XV de Novembro se localiza em dois endereços:
              </p>
              <p className="text-gray-600 leading-loose mb-2">
                <Link href="https://www.google.com/maps/place/R.+Argemiro+de+Hungria+Machado,+14+-+Guadalupe,+Rio+de+Janeiro+-+RJ,+21670-290/@-22.8475228,-43.374169,3a,75y,89.12h,90t/data=!3m7!1e1!3m5!1sG7l0sqjG-6SiwDPKkfGvJg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DG7l0sqjG-6SiwDPKkfGvJg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D89.11681%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m8!3m7!1s0x9963a5ca18331d:0xee7df65c9df2e261!8m2!3d-22.8475147!4d-43.3740537!14m1!1BCgIgAQ!16s%2Fg%2F11csgdzn1j" className="hover:underline font-semibold">Rua Argemiro Hungria Machado, 14, Guadalupe</Link>
              </p>

              <p className="text-gray-600 leading-loose mb-8">
                <Link href="https://www.google.com/maps/@-22.8472851,-43.3736465,3a,75y,244.04h,85.91t/data=!3m7!1e1!3m5!1sc_krM3sNMr2sNWcC1QZdWw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dc_krM3sNMr2sNWcC1QZdWw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D58.22528%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192" className="hover:underline font-bold">Rua João de Souza Carvalho, 74, Guadalupe</Link>
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre:
              </h1>

              <p className="text-gray-800 leading-loose mb-8">
                A Igreja XV de Novembro foi fundada em 1945. Em 2022 completamos 77 anos de existência e de bênção a Guadalupe! Atualmente o Pastor da Igreja XV de Novembro é o Carlos Gilberto Nobrega, informações sobre o contato do pastor estará na aba de contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
