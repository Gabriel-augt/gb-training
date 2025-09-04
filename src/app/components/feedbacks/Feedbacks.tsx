import FeedbackCard from "./FeedbackCard";

export default function Feedbacks() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 h-screen w-full bg-black
    max-[1280px]:h-max max-lg:gap-14">
      <h1 className="font-anton tracking-wide text-3xl md:text-5xl sm:text-4xl">O que meus clientes dizem</h1>
      <div className="flex flex-row gap-32 max-[1280px]:flex-col  max-[1280px]:gap-20">
      <FeedbackCard
        testimonials='"A combinação de treino e dieta personalizada
        fez toda a diferença na minha rotina."'
        author="Daniele Debbians"
        imageOne="/feedback1a.jpg"
        imageTwo="/feedback1b.jpg"
      />
      <FeedbackCard
        testimonials='"Nunca me senti tão forte! A Ana me levou ao limite
        e me deu o apoio necessário para ter sucesso. Recomendo muito!"'
        author="Stter Suns"
        imageOne="/feedback2a.jpg"
        imageTwo="/feedback2b.jpg"
      />
      </div>
    </div>
  );
}
