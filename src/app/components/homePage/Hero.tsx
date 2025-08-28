import Image from "next/image";

export default function ItemNavBar() {
  return (
    <main>
      <div className="relative w-full h-screen">
        <Image className="object-cover bg-gradient-to-r from-black to-transparent -z-10" src="/bgHome.png" alt="Background" fill priority />
        <Image className="object-cover -z-10" src="/ellipseEffect.png" alt="Background Effect" fill />
        <div className="flex flex-row items-center justify-around h-screen w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-oxanium font-bold text-[80px] w-[500px]">
              Transforme <br /> Desafios <br /> em Triunfos!
            </h1>
            <p className="font-outfit text-2xl text-neutral-400 w-[500px]">
              Como personal trainer apaixonado, acredito em capacitar as pessoas
              para que alcancem seus objetivos decondicionamento físico por meio
              de treinamento e apoio personalizados.
            </p>
          </div>
            <figure className="flex items-center justify-center w-96 h-96 z-20">
              <Image className="object-cover rounded-b-full" src="/personal1.png" alt="Personal Trainer" width={535} height={880} priority/>
            </figure>
        </div>
      </div>
    </main>
  );
}
