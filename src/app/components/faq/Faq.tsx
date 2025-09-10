import FaqContent from "./FaqContent";
import { useTranslations } from "next-intl";

export default function Faq() {
  const t = useTranslations('HomePage.anchors');
  return (
    <div id={t('faqAnchor')}
      className="relative w-full h-max bg-black px-6 pb-8 pt-32 shadow-xl
      ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
      <FaqContent />
    </div>
  );
}
