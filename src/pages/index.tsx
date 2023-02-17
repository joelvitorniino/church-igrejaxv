import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Minha Igreja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-base flex items-center justify-center relative -top-[28rem]">Igreja XV de Novembro</h1>
    </div>
  )
}