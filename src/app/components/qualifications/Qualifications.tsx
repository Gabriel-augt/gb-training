import Image from "next/image";
import QualificationBlocks from './QualificationBlocks'

export default function WhoIs() {
    return (
        <div className="h-[700px] w-screen flex justify-center items-center bg-black">
            <section className="flex flex-row items-center justify-evenly w-full">
                <div className="flex flex-col gap-6 w-[500px] h-max">
                    <h1 className="font-anton text-6xl uppercase tracking-wide">
                        Qualificações
                    </h1>
                    <p className="font-outfit text-2xl text-neutral-400 tracking-tight">
                        Sou personal trainer certificado com mais de 10 anos de experiência,
                        especializado em treinamento pessoal e nutrição. Sou apaixonado por ajudar
                        pessoas a transformarem suas vidas e busco criar um ambiente acolhedor onde
                        todos possam prosperar, independentemente do nível de condicionamento físico.
                    </p>
                    <div className="flex gap-6">
                        <QualificationBlocks text="CPT" />
                        <QualificationBlocks text="CFT" />
                        <QualificationBlocks text="CN" />
                    </div>
                </div>
                <div className='flex items-center relative w-auto h-auto'>
                    <Image className="object-cover w-[600px] h-auto rounded-2xl" src="/personal4.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
            </section>
        </div>
    )
}