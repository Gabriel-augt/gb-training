import Image from "next/image";
import WhoIsBlocks from './WhoIsBlocks'

export default function WhoIs() {
    return (
        <div className="h-[700px] w-screen flex justify-center items-center bg-black">
            <section className="flex flex-row items-center justify-evenly w-full">
                <div className='flex items-center relative w-auto h-auto'>
                    <Image className="object-cover w-[600px] h-auto rounded-3xl" src="/personal3.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
                <div className="flex flex-col gap-6 w-[500px] h-max">
                    <h1 className="font-anton text-6xl uppercase tracking-wide">
                        Quem é Ana Lin?
                    </h1>
                    <p className="font-outfit text-2xl text-neutral-400 tracking-tight">
                        Como personal trainer apaixonada, acredito em capacitar indivíduos para
                        atingir seus objetivos de condicionamento físico por meio de treinamento
                        e suporte personalizados.
                    </p>
                    <div className="flex gap-6">
                        <WhoIsBlocks num="2000+" text="Clientes Satisfeitos" />
                        <WhoIsBlocks num="10" text="Anos de Experiência" />
                        <WhoIsBlocks num="15" text="Anos no Esporte" />
                    </div>
                </div>
            </section>
        </div>
    )
}