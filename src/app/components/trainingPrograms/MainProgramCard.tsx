interface MainProgramCardsProps {
    title: string
    price: string
    description: string
}

import CardButton from "./CardButton";

export default function MainProgramCards({title, price, description}:MainProgramCardsProps) {
  return (
    <div className="w-[360px] h-[450px] border border-purple-800 rounded-2xl border-t-0
    hover:scale-105 duration-300">
      <div className="flex flex-col justify-center items-center text-center h-full w-full space-y-5">
        <h2 className="font-outfit text-2xl">
            {title}
        </h2>
        <span className="font-anton text-[80px] text-purple-800">
            {price}
        </span>
        <span className="font-outfit text-neutral-400">
            Assinatura Mensal
        </span>
        <p className="font-outfit text-neutral-400 w-60">
          {description}
        </p>
        <CardButton />
      </div>
    </div>
  );
}
