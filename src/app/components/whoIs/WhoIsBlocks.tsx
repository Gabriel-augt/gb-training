export interface WhoIsBlocksProps {
    num: string;
    text: string;
}

export default function whoIsBlocks ({ num, text }: WhoIsBlocksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-max h-max p-2
    bg-neutral-900 rounded-2xl hover:shadow hover:shadow-purple-700 sm:w-44
    sm:h-32 sm:p-0 sm:gap-3">
      <span className="font-anton text-3xl text-purple-700 sm:text-5xl">{num}</span>
      <span className="font-outfit text-[10px] text-neutral-400 sm:text-base">{text}</span>
    </div>
  );
}
