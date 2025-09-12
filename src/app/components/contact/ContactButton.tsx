import { useTranslations } from "next-intl";

export default function ContactButton () {
    const t = useTranslations('Contact');
    return (
        <button className="items-center justify-center w-32 px-6 py-2.5 text-center font-outfit
          font-semibold text-black duration-200 bg-white border-2 border-white rounded-full
          inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none
          focus-visible:outline-white text-lg focus-visible:ring-white cursor-pointer"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom">
            {t('sendButton')}
        </button>
    );
}