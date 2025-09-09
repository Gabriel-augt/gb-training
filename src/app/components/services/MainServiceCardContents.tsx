import MainServiceCard from "./MainServiceCard";
import { useTranslations } from "next-intl";

export default function MainServiceCardContent() {
  const t = useTranslations('Services.MainService');
  return (
    <MainServiceCard
      title={t('title')}
      price={t('price')}
      description={t('description')}
    />
  );
}
