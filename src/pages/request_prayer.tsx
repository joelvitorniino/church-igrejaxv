import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import EmailSent from './components/EmailSent';

export default function RequestPrayer() {
  const [name, setName] = useState("");
  const [requestPrayer, setRequestPrayer] = useState("");

  const request_prayer = () => {
    axios.post('/api/prayer', {
      name,
      request_prayer: requestPrayer
    })
      .then((e) => {
        toast.success('Email enviado com sucesso!');
      })
      .catch(e => {
        toast.error("Não foi possível efetuar o envio do e-mail, tente novamente mais tarde!");
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 lg:text-center">Pedido de Oração</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" is="nome">
              Nome Completo
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" is="motivo">
              Motivo da Oração
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              id="motivo"
              placeholder="Descreva o motivo da sua oração"
              value={requestPrayer}
              onChange={(e) => setRequestPrayer(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              type="button"
              onClick={request_prayer}
            >
              Enviar
            </button>
            <EmailSent />
          </div>
        </form>
      </div>
    </div>
  );
}
