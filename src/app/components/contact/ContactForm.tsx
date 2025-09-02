import { MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="text-left p-10 border rounded-lg overflow-hidden space-y-6">
      <div className="inline-flex gap-4">
        <MessageSquare />
        <h1 className="text-xl">Envie uma mensagem</h1>
      </div>
      <form>
        <div className="w-full space-y-4">
          <div>
            <label className="text-xs text-neutral-400 ">Seu nome</label>
            <input
              className="border block w-full border-gray-200 rounded-md px-5 py-3
                    focus:outline-none focus:border-purple-800"
              type="email"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 ">Seu E-mail</label>
            <input
              className="border block w-full border-gray-200 rounded-md px-5 py-3
                    focus:outline-none focus:border-purple-800"
              type="text"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 ">Sua mensagem</label>
            <textarea
              className="border block w-full border-gray-200 rounded-md px-5 py-3 h-56
                    resize-none focus:outline-none focus:border-purple-800"
              placeholder="Digite sua Mensagem"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
