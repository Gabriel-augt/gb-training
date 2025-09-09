import { useTranslations } from "next-intl";

export default function ServicesHeader() {
  const t = useTranslations('Services');
  return (
    <div className="text-center">
      <h1 className="font-anton text-3xl tracking-wide mb-2 md:text-5xl sm:text-4xl">
        {t('title')}
      </h1>
      <p className="font-outfit text-2xl text-neutral-400 sm:text-3xl">
        {t('subtitle')}
      </p>
    </div>
  );
}
