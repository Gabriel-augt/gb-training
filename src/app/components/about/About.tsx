import Image from "next/image";
import AboutContent from "./AboutContent";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('HomePage.anchors');
    return (
        <div  id={t('aboutAnchor')} className="h-max w-full flex justify-center items-center
        bg-black 2xl:h-[600px] overflow-x-hidden">
            <section className="flex flex-row mx-6 justify-evenly w-full py-16
            max-xl:flex-col-reverse max-xl:gap-8 max-xl:items-center">
                <div className='flex items-center relative w-auto h-auto overflow-x-hidden'
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom">
                    <Image className="object-cover w-80 h-auto rounded-2xl sm:w-96 md:w-[600px]"
                    src="/personal3.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
                <AboutContent />
            </section>
        </div>
    )
}