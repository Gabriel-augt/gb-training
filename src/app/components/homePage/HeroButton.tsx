import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroButton() {
  const t = useTranslations('HomePage');
  return (
    <button
      className="items-center justify-center w-max px-3 py-2 text-center my-6 font-outfit font-semibold
      text-black duration-200 bg-white border-2 border-white rounded-full inline-flex
      hover:bg-transparent hover:border-white hover:text-white focus:outline-none
      focus-visible:outline-white text-xl focus-visible:ring-white cursor-pointer
      lg:my-8 lg:text-2xl lg:px-6 lg:py-2.5 sm:px-4">
        <Link href={`#${t('anchors.contactAnchor')}`}>
          {t('hero.joinUsButton')}
        </Link>
    </button>
  );
}
