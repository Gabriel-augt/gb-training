import { useTranslations } from "next-intl";
import ServicesHeader from "./ServicesHeader";
import ServiceCardOne from "./ServiceCardOne";
import ServiceCardTwo from "./ServiceCardTwo";
import MainServiceCardContent from "./MainServiceCardContents";

export default function Services () {
    const t = useTranslations('HomePage.anchors');
    return (
        <div id={t('servicesAnchor')} className="flex flex-col gap-20 items-center justify-center
        overflow-x-hidden h-max w-full bg-black py-28 max-[1190px]:h-max max-lg:gap-14 max-lg:py-14 max-xl:pb-16">
            <ServicesHeader />
            <section className="flex flex-row items-center gap-16 px-6
            max-[1190px]:flex-col max-[400px]:w-full max-[320px]:px-0">
                <ServiceCardOne />
                <MainServiceCardContent />
                <ServiceCardTwo />
            </section>
        </div>
    )
}