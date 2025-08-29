import MainProgramCard from "./MainProgramCard";
import ProgramCards from "./ProgramCards";


export default function TrainingPrograms () {
    return (
        <div className="flex flex-col gap-28 items-center justify-center h-screen w-screen bg-black">
            <div className="text-center">
                <h1 className="font-anton text-6xl tracking-wide mb-2">
                    Programas de Treinamento
                </h1>
                <p className="font-outfit text-4xl text-neutral-400">
                    Escolha seu programa
                </p>
            </div>
            <section className="flex flex-row items-center gap-16">
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