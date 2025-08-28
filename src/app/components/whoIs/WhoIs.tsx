import Image from "next/image";
import Blocks from './Blocks'

export default function WhoIs() {
    return (
        <div className="h-[500px] w-screen flex justify-center items-center bg-black">
            <section className="flex flex-row items-center justify-evenly w-full">
                <div className='flex items-center relative w-[545px] h-auto'>
                    <Image className="object-cover w-[545px] h-auto" src="/personal2.png" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
                <div className="flex flex-col gap-6 w-[500px] h-max">
                    <h1 className="font-anton text-6xl">
                        Quem é Ana Lin?
                    </h1>
                    <p className="font-outfit text-2xl text-neutral-400">
                        Como personal trainer apaixonada, acredito em capacitar indivíduos para
                        atingir seus objetivos de condicionamento físico por meio de treinamento
                        e suporte personalizados.
                    </p>
                    <div className="flex gap-6">
                        <Blocks num="2000+" text="Clientes Satisfeitos" />
                        <Blocks num="10" text="Anos de Experiência" />
                        <Blocks num="15" text="Anos no Esporte" />
                    </div>
                </div>
            </section>
        </div>
    )
}