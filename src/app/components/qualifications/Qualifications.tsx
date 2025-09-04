import Image from "next/image";
import QualificationBlocks from './QualificationBlocks'

export default function Qualification() {
    return (
        <div className="h-max w-full flex justify-center items-center bg-black">
            <section className="flex flex-row mx-6 justify-evenly w-full py-16
            max-xl:flex-col max-xl:gap-8 sm:items-center">
                <div className="flex flex-col gap-4 w-80 h-max sm:w-[500px]">
                    <h1 className="font-anton text-5xl uppercase tracking-wide max-sm:text-4xl">
                        Qualificações
                    </h1>
                    <p className="font-outfit text-lg text-neutral-400 tracking-tight sm:text-2xl">
                        Sou personal trainer certificado com mais de 10 anos de experiência,
                        especializado em treinamento pessoal e nutrição. Sou apaixonado por ajudar
                        pessoas a transformarem suas vidas e busco criar um ambiente acolhedor onde
                        todos possam prosperar, independentemente do nível de condicionamento físico.
                    </p>
                    <div className="flex gap-3 sm:gap-6 max-sm:justify-center">
                        <QualificationBlocks text="CPT" />
                        <QualificationBlocks text="CFT" />
                        <QualificationBlocks text="CN" />
                    </div>
                </div>
                <div className='flex items-center relative w-auto h-auto'>
                    <Image className="object-cover w-80 h-auto rounded-2xl sm:w-96 md:w-[600px]"
                    src="/personal4.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
            </section>
        </div>
    )
}