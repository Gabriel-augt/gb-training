import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavbarButton () {
  const t = useTranslations('HomePage');
    return (
        <button
        className="items-center justify-center w-32 px-6 py-2.5 text-center font-outfit font-semibold
        text-black duration-200 bg-white border-2 border-white rounded-full inline-flex
        hover:bg-transparent hover:border-white hover:text-white focus:outline-none
        focus-visible:outline-white text-lg focus-visible:ring-white cursor-pointer">
          <Link href={`#${t('anchors.contactAnchor')}`}>
            {t('navBar.startButton')}
          </Link>
      </button>
    )
}