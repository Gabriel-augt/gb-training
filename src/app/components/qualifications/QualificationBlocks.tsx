export interface QualificationBlocksProps {
    text: string;
}

export default function qualificationBlocks ({ text }: QualificationBlocksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-44 h-32
    bg-neutral-900 rounded-2xl hover:shadow hover:shadow-purple-700">
      <span className="font-anton text-5xl text-purple-700">{text}</span>
    </div>
  );
}
