import { useTranslations } from "next-intl";
import ContactContent from "./ContactContent";

export default function Contact() {
  const t = useTranslations('HomePage.anchors');
  return (
    <div id={t('contactAnchor')} className="bg-black">
      <section className="flex items-center justify-center w-full h-[120vh] font-outfit">
        <ContactContent />
      </section>
    </div>
  );
}
