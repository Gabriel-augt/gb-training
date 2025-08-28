import Image from "next/image";

export default function LogoSlider() {
    return (
        <section className="h-40 w-full inline-flex flex-nowrap overflow-hidden group bg-black
        [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none
            animate-infinite-scroll">
                  <div className="animate-slide-left inline-block w-max group-hover:[animation-play-state:paused]">
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum1.svg" alt="Transistor" width={200} height={40} />
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum2.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum3.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum4.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum5.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum6.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum7.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum8.svg" alt="Transistor" width={200} height={40}/>
                  </div>
            </div>
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none
            animate-infinite-scroll" aria-hidden="true">
                  <div className="animate-slide-left inline-block w-max group-hover:[animation-play-state:paused]">
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum1.svg" alt="Transistor" width={200} height={40} />
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum2.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum3.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum4.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum5.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum6.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum7.svg" alt="Transistor" width={200} height={40}/>
                    <Image className="mx-4 inline h-16 w-52" src="/logos/logoipsum8.svg" alt="Transistor" width={200} height={40}/>
                  </div>
            </div>
        </section>
    )
}