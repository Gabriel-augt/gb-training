import Image from "next/image";
import WhoIsBlocks from './WhoIsBlocks'

export default function WhoIs() {
    return (
        <div className="h-max w-full flex justify-center items-center bg-black 2xl:h-[600px]">
            <section className="flex flex-row mx-6 justify-evenly w-full py-16
            max-xl:flex-col-reverse max-xl:gap-8 sm:items-center">
                <div className='flex items-center relative w-auto h-auto'>
                    <Image className="object-cover w-80 h-auto rounded-2xl sm:w-96 md:w-[600px]"
                    src="/personal3.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
                <div className="flex flex-col gap-4 w-80 h-max sm:w-[500px]">
                    <h1 className="font-anton text-5xl uppercase tracking-wide max-sm:text-4xl">
                        Quem é Ana Lin?
                    </h1>
                    <p className="font-outfit text-lg text-neutral-400 tracking-tight sm:text-2xl">
                        Como personal trainer apaixonada, acredito em capacitar indivíduos para
                        atingir seus objetivos de condicionamento físico por meio de treinamento
                        e suporte personalizados.
                    </p>
                    <div className="flex gap-3 sm:gap-6">
                        <WhoIsBlocks num="2000+" text="Clientes Satisfeitos" />
                        <WhoIsBlocks num="10" text="Anos de Experiência" />
                        <WhoIsBlocks num="15" text="Anos no Esporte" />
                    </div>
                </div>
            </section>
        </div>
    )
}