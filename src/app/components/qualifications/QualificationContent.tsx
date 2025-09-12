import QualificationBlocks from "./QualificationBlocks";
import { useTranslations } from "next-intl";

export default function QualificationContent() {
  const t = useTranslations('Qualification');
  return (
    <div className="flex flex-col gap-4 w-80 h-max sm:w-[500px]"
    data-aos="fade-right"
    data-aos-duration="1500"
    data-aos-anchor-placement="top-bottom">
      <h1 className="font-anton text-5xl uppercase tracking-wide max-sm:text-4xl">
        {t('title')}
      </h1>
      <p className="font-outfit text-lg text-neutral-400 tracking-tight sm:text-2xl">
        {t('qualificationDescription')}
      </p>
      <div className="flex gap-3 sm:gap-6 max-sm:justify-center">
        <QualificationBlocks text="CPT" />
        <QualificationBlocks text="CFT" />
        <QualificationBlocks text="CN" />
      </div>
    </div>
  );
}
