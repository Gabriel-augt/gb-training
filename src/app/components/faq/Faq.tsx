import QuestionAnswer from "./QuestionAnswer";

export default function Faq() {
  return (
    <div
      className="relative w-full h-max bg-black px-6 pb-8 pt-32 shadow-xl
    ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10"
    >
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h1 className="font-anton mt-3 tracking-wide text-3xl md:text-5xl sm:text-4xl">Perguntas frequentes</h1>
          <h2 className="mt-2 text-center text-neutral-400 text-2xl font-bold tracking-tight sm:text-3xl">
            FAQ
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-800">
          <QuestionAnswer
            question="O treino é feito presencialmente ou online?"
            answer="Oferecemos treinos tanto presenciais quanto online,
            para que você escolha a opção que mais se adapta à sua rotina."
          />
          <QuestionAnswer
            question="Preciso ter experiência com exercícios para começar?"
            answer="Não! Os treinos são totalmente adaptados ao seu nível,
            seja iniciante, intermediário ou avançado."
          />
          <QuestionAnswer
            question="Preciso de equipamentos para treinar em casa?"
            answer="Não necessariamente. Os treinos podem ser feitos com
            o peso do corpo ou com equipamentos simples. Caso tenha halteres,
            elásticos ou outros acessórios, podemos incluí-los na rotina."
            />
          <QuestionAnswer
          question="Como entro em contato com o suporte?"
          answer="Se precisar de ajuda com nossa plataforma ou tiver alguma outra dúvida,
          entre em contato com a equipe de suporte da empresa enviando uma solicitação de
          suporte pelo site ou enviando um e-mail para support@ourwebsite.com."
          />
          <QuestionAnswer
          question="Posso obter um reembolso pela minha assinatura?"
          answer="Oferecemos uma garantia de reembolso de 30 dias para a maioria dos
          nossos planos de assinatura. Se não estiver satisfeito com sua assinatura nos
          primeiros 30 dias, você pode solicitar um reembolso total. Reembolsos para
          assinaturas ativas por mais de 30 dias podem ser considerados caso a caso."
          />
        </div>
      </div>
    </div>
  );
}
