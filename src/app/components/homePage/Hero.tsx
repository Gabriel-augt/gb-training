import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <main>
      <div className="relative w-full h-screen bg-gradient-to-r from-black to-black/60">
        <Image className="object-cover -z-10 lg:object-top" src="/bgHome.jpg" alt="Background" fill priority />
        <hr className="absolute bottom-0 w-full h-12 border-0 bg-gradient-to-t from-black to-transparent" />
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="font-oxanium font-bold text-xl mx-6 w-max xl:text-6xl lg:text-5xl sm:text-4xl">
              Transforme Desafios em Triunfos!
            </h1>
            <p className="font-outfit text-md text-neutral-400 sm:text-2xl">
              Mais Força, Mais Energia, Mais Você!
            </p>
            <HeroButton />
            <div className="inline-flex items-start gap-6">
            <Youtube className="transition hover:scale-110 hover:cursor-pointer max-md:h-11" size={56} strokeWidth={1} />
            <Instagram className="transition hover:scale-110 hover:cursor-pointer max-md:h-10" size={48} strokeWidth={1} />
            <Facebook className="transition hover:scale-110 hover:cursor-pointer max-md:h-10" size={48} strokeWidth={1} />
            </div>
        </div>
      </div>
    </main>
  );
}
