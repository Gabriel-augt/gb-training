import MainProgramCard from "./MainProgramCard";
import ProgramCards from "./ProgramCards";


export default function TrainingPrograms () {
    return (
        <div className="flex flex-col gap-20 items-center justify-center h-max w-full bg-black py-28
        max-[1190px]:h-max max-lg:gap-14 max-lg:py-12">
            <div className="text-center">
                <h1 className="font-anton text-3xl tracking-wide mb-2 md:text-5xl sm:text-4xl">
                    Programas de Treinamento
                </h1>
                <p className="font-outfit text-2xl text-neutral-400 sm:text-3xl">
                    Escolha seu programa
                </p>
            </div>
            <section className="flex flex-row items-center gap-16 max-[1190px]:flex-col">
                <ProgramCards title="Treinamentos Pessoais" price="200$"
                description="Acompanhamento individualizado com treinos sob medida para seus objetivos." />
                <MainProgramCard title="Treinamento Pessoal + Dieta" price="300$"
                description="Combinação completa para transformar seu corpo com treino e nutrição alinhados."/>
                <ProgramCards title="Dieta" price="150$"
                description="Plano alimentar exclusivo para otimizar seus resultados." />
            </section>
        </div>
    )
}