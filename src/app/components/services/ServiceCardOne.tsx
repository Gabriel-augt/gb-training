import ServiceCards from "./ServicesCards";
import { useTranslations } from "next-intl";

export default function ServiceCardOne() {
  const t = useTranslations('Services.firstService');
  return (
    <ServiceCards
      title={t('title')}
      price={t('price')}
      description={t('description')}
    />
  );
}
