import ServiceCards from "./ServicesCards";
import { useTranslations } from "next-intl";

export default function ServiceCardOne() {
  const t = useTranslations('Services.secondService');
  return (
    <ServiceCards
      title={t('title')}
      price={t('price')}
      description={t('description')}
    />
  );
}
