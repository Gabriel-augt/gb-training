import { useTranslations } from "next-intl";
import ServicesHeader from "./ServicesHeader";
import ServiceCardOne from "./ServiceCardOne";
import ServiceCardTwo from "./ServiceCardTwo";
import MainServiceCardContent from "./MainServiceCardContents";

export default function Services () {
    const t = useTranslations('HomePage.anchors');
    return (
        <div id={t('servicesAnchor')} className="flex flex-col gap-20 items-center justify-center h-max w-full bg-black py-28
        max-[1190px]:h-max max-lg:gap-14 max-lg:py-12">
            <ServicesHeader />
            <section className="flex flex-row items-center gap-16 max-[1190px]:flex-col">
                <ServiceCardOne />
                <MainServiceCardContent />
                <ServiceCardTwo />
            </section>
        </div>
    )
}