import AboutBlocks from "./AboutBlocks";
import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations('About');
  return (
    <div className="flex flex-col gap-4 w-80 h-max sm:w-[500px]"
    data-aos="fade-left"
    data-aos-duration="1500"
    data-aos-anchor-placement="top-bottom">
      <h1 className="font-anton text-5xl uppercase tracking-wide max-sm:text-4xl">
        {t('whoIsAnaLin')}
      </h1>
      <p className="font-outfit text-lg text-neutral-400 tracking-tight sm:text-2xl">
        {t('descriptionAbout')}
      </p>
      <div className="flex gap-3 sm:gap-6">
        <AboutBlocks num="2000+" text={t('clientBlock')} />
        <AboutBlocks num="10" text={t('experienceBlock')} />
        <AboutBlocks num="15" text={t('sportsBlock')} />
      </div>
    </div>
  );
}
