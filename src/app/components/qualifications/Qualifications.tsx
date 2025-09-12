import Image from "next/image";
import QualificationContent from "./QualificationContent";
import { useTranslations } from "next-intl";

export default function Qualification() {
    const t = useTranslations('HomePage.anchors');
    return (
        <div id={t('qualificationAnchor')} className="h-max w-full flex justify-center items-center bg-black overflow-x-hidden">
            <section className="flex flex-row mx-6 mt-5 justify-evenly w-full py-16
            max-xl:flex-col max-xl:gap-8 max-xl:items-center max-xl:pb-8">
                <QualificationContent />
                <div className='flex items-center relative w-auto h-auto'
                data-aos="fade-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                    <Image className="object-cover w-80 h-auto rounded-2xl sm:w-96 md:w-[600px]"
                    src="/personal4.jpg" alt="Personal Trainer" width={535} height={880} priority/>
                </div>
            </section>
        </div>
    )
}