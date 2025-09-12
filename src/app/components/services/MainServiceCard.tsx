import CardButton from "./CardButton";
import { useTranslations } from "next-intl";

interface MainServiceCardProps {
    title: string
    price: string
    description: string
}

export default function MainServiceCard({title, price, description}:MainServiceCardProps) {
  const t = useTranslations('Services');
  return (
    <div className="w-[360px] h-[450px] border border-purple-800 rounded-2xl border-t-0
    hover:scale-105 duration-300 max-[400px]:w-full"
    data-aos="flip-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="top-bottom">
      <div className="flex flex-col justify-center items-center text-center h-full w-full space-y-5">
        <h3 className="font-outfit text-2xl px-4">
            {title}
        </h3>
        <span className="font-anton text-[80px] text-purple-800">
            {price}
        </span>
        <span className="font-outfit text-neutral-400">
            {t('monthlySubscription')}
        </span>
        <p className="font-outfit text-neutral-400 w-60">
          {description}
        </p>
        <CardButton />
      </div>
    </div>
  );
}
