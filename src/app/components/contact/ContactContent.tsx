import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";
import { useTranslations } from "next-intl";

export default function ContactContent() {
  const t = useTranslations('Contact');
  return (
    <div className="text-center space-y-2 w-[1000px] mx-6
    max-md:space-y-6 sm:md:text-5xl sm:text-3xl">
      <h1 className="font-anton tracking-wide text-3xl mb-0
      md:mb-3 md:text-5xl sm:text-4xl">
        {t('title')}
      </h1>
      <p className="text-neutral-400 text-2xl tracking-tight mb-10
      md:text-3xl md:mb-12 sm:text-3xl">
        {t('subtitle')}
      </p>
      <ContactForm />
      <ContactButton />
    </div>
  );
}
