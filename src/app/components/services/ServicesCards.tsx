import { useTranslations } from "next-intl";

interface ServicesCardsProps {
    title: string
    price: string
    description: string
}

import CardButton from "./CardButton";

export default function ServicesCards({title, price, description}:ServicesCardsProps) {
  const t = useTranslations('Services');
  return (
    <div className="w-80 h-[410px] border border-neutral-800 rounded-2xl border-t-0
    hover:scale-105 duration-300">
      <div className="flex flex-col justify-center items-center text-center h-full w-full space-y-5">
        <h3 className="font-outfit text-2xl">
            {title}
        </h3>
        <span className="font-anton text-[80px]">
            {price}
        </span>
        <span className="font-outfit text-neutral-400">
            {t('monthlySubscription')}
        </span>
        <p className="font-outfit text-neutral-400 w-60 h-16">
          {description}
        </p>
        <CardButton />
      </div>
    </div>
  );
}
