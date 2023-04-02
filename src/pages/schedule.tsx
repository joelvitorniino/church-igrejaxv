import Head from "next/head";
import Image from "next/image";

export default function Schedule() {
    return (
        <div className="bg-gray-300 p-8 min-h-screen">
        <Head>
            <title>Página De Agenda</title>
        </Head>

            <h1 className="text-3xl font-bold">Agenda da Igreja:</h1>

            <div className="mt-4">
                <span className="inline-block mt-1">
                    <p className="inline font-semibold hover:font-bold">
                        Estamos com um projeto chamado Uma Nova História, que consistirá em uma série de cursos profissionalizantes, segue abaixo a agenda:
                    </p>

                    <Image src="/images/courses.jpg" width="250" height="250" alt="Cursos Uma nova História" />

                    <br />
                    
                    <p className="inline font-semibold hover:font-bold">
                        No início de abril essa será a nossa agenda:
                    </p>

                    <Image src="/images/saint_week.jpg" width="250" height="250" alt="Semana Santa" />
                </span>
            </div>
        </div>
    )
}