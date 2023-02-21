import Head from "next/head";
import Image from "next/image";

import TypeWriter from 'typewriter-effect'

import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'
import Link from "next/link";

const compliments = [
  "Bem vindo ao Site da Igreja XV de Novembro!",
  "Abaixo terá fotos da Igreja, caso visitantes estejam interessados!",
  "Siga nossas redes sociais abaixo:",
  "Obrigado por ler até o fim! Visite nossa igreja, as informações sobre a localidade estarão na aba sobre!"
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Igreja XV de Novembro</title>
      </Head>

      <h1 className="text-3xl font-base flex items-center justify-center relative lg:-top-[15rem] xl:-top-[18rem] xl:-ml-5 max-md:-top-[15rem] max-sm:-top-[14rem] iphone:-top-[6.5rem] iphone:-mr-[7rem]">Igreja XV de Novembro</h1>

      <div className="flex flex-col items-center mb-10">
        <Image
          src="images/church_xv.svg"
          width="128"
          height="128"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mb-4 relative lg:-top-[14rem] xl:-top-[17rem] max-md:-top-[14rem] max-sm:-top-[13.6rem] iphone:-top-[6rem] iphone:-mr-20 iphone:max-w-none"
        />

        <h1 className="text-xl text-gray-700 mb-10 relative lg:-top-[14.7rem] xl:-top-[17rem] max-md:-top-[15rem] max-sm:-top-[14rem] iphone:-top-[6.5rem] iphone:-mr-24 lg:text-center max-md:text-center max-sm:text-center iphone:text-center">
          <TypeWriter 
            options={{
              strings: compliments,
              autoStart: true,
              loop: true
            }}
          />
        </h1>
      </div>

      <div className="grid grid-cols-3 md:flex-row justify-between">
        <Link href="https://www.instagram.com/igrejaxv/" className="bg-gray-300 py-2 px-4 relative lg:-top-[19rem] xl:-top-[20.7rem] max-md:-top-[16rem] max-sm:-top-[17rem] iphone:-top-[10.2rem] iphone:-mr-12 iphone:ml-11 -ml-2 mr-3 rounded-lg mb:mb-0 hover:bg-gray-400">
          <BsInstagram className="w-7 h-7 inline-block" />
          <span className="ml-2">Instagram</span>
        </Link>

        <Link href="https://www.facebook.com/igrejaxv/" className="bg-gray-300 py-2 px-4 relative lg:-top-[19rem] xl:-top-[20.7rem] max-md:-top-[16rem] max-sm:-top-[17rem] iphone:-top-[10.2rem] iphone:-mr-12 iphone:ml-11 -ml-2 mr-3 rounded-lg mb:mb-0 hover:bg-gray-400">
          <BsFacebook className="w-7 h-7 inline-block" />
          <span className="ml-2">Facebook</span>
        </Link>

        <Link href="https://www.youtube.com/@IgrejaXV" className="bg-gray-300 py-2 px-4 relative lg:-top-[19rem] xl:-top-[20.7rem] max-md:-top-[16rem] max-sm:-top-[17rem] iphone:-top-[10.2rem] iphone:-mr-12 iphone:ml-11 -ml-2 mr-7 rounded-lg mb:mb-0 hover:bg-gray-400">
          <BsYoutube className="w-7 h-7 inline-block" />
          <span className="ml-2">Youtube</span>
        </Link>
      </div>
    </div>
  )
}