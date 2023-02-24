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
                        Em março teremos um projeto chamado Uma Nova História, que consistirá em uma série de cursos profissionalizantes, segue abaixo a agenda:
                    </p>

                    <Image src="/images/courses.jpg" width="250" height="250" alt="Cursos Uma nova História" />

                    <p className="inline font-semibold hover:font-bold">
                        Local da Inscrição: Igreja Batista XV de Novembro, Rua Argemiro Hungria Machado 14, Guadalupe.
                    </p>

                    <p className="font-semibold hover:font-bold">
                        Data: 28/02 às 08:30
                    </p>

                    <p className="font-semibold hover:font-bold">
                        Documentos necessários: Comprovante de Residência
                    </p>

                    <p className="font-semibold hover:font-bold">
                        Responsável pela inscrição: Pr. Carlos Gilberto Nóbrega.
                    </p>
                </span>
            </div>
        </div>
    )
}