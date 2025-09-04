export interface QualificationBlocksProps {
    text: string;
}

export default function qualificationBlocks ({ text }: QualificationBlocksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-max h-max p-4
    bg-neutral-900 rounded-2xl hover:shadow hover:shadow-purple-700 sm:w-44 sm:h-32 sm:p-0">
      <span className="font-anton text-xl text-purple-700 sm:text-4xl">{text}</span>
    </div>
  );
}
