import { Facebook, Instagram, Mail, MapPin, Phone, Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div
        className="flex flex-col items-center justify-center gap-28 h-max py-12 bg-black border-y border-y-zinc-900
      lg:flex-row lg:h-56 lg:justify-around lg:items-center lg:gap-0"
      >
        <div className="flex flex-col gap-4 w-max">
          <span className="font-oxanium text-2xl">GB Training</span>
          <div className="inline-flex gap-5">
            <Youtube
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
            <Instagram
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
            <Facebook
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-max">
          <div className="inline-flex gap-2 items-center">
            <Mail
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
            <span className="font-outfit">mail@mail.com</span>
          </div>
          <div className="inline-flex gap-2 items-center">
            <Phone
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
            <span className="font-outfit">99 9999-9999</span>
          </div>
          <div className="inline-flex gap-2 items-center">
            <MapPin
              className="transition hover:scale-110 hover:cursor-pointer"
              size={32}
              strokeWidth={1}
            />
            <span className="font-outfit">99 9999-9999</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-max">
          <div className="text-sm text-center text-gray-500 w-[200px]">
            <Link href={"https://linktr.ee/gabriel_augt"} target="_blank">
              <div className="relative h-40">
                <Image
                  className="object-cover"
                  src="/gb.png"
                  alt="by: Gabriel-augt"
                  fill
                  sizes="max-width: 268px"
                />
              </div>
            </Link>
            © Copyright 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
