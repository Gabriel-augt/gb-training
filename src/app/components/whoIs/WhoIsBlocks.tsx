export interface WhoIsBlocksProps {
    num: string;
    text: string;
}

export default function whoIsBlocks ({ num, text }: WhoIsBlocksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-44 h-32
    bg-neutral-900 rounded-2xl hover:shadow hover:shadow-purple-700">
      <span className="font-anton text-5xl text-purple-700">{num}</span>
      <span className="font-outfit text-neutral-400">{text}</span>
    </div>
  );
}
