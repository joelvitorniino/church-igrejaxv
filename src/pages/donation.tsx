import PixIcon from "./components/PixIcon";
import { CiBank } from 'react-icons/ci';

export default function Donation() {
    return (
        <div className="bg-gray-300 p-8 min-h-screen">
        <h1 className="text-3xl font-bold">Pix da Igreja:</h1>
        <div className="mt-4">
          <span className="inline-block m-1">
            <PixIcon />
              <p className="inline ml-2 font-semibold hover:font-bold iphone:whitespace-nowrap">
                Pix da Igreja: 34.164.376/0001-53
              </p>
          </span>

          <span className="lg:flex md:flex sm:flex iphone:inline-block m-1">
            <CiBank size={65} className="inline ml-1" />
              <p className="inline ml-2 font-semibold hover:font-bold mt-6">
                Agência 2787, Conta-Corrente: 007100-5, CNPJ: 34.164.376/0001-53, Banco: Bradesco 
              </p>
          </span>
        </div>
      </div>
    )
}