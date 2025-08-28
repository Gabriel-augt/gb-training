export interface BlocksProps {
    num: string;
    text: string;
}

export default function Blocks({ num, text }: BlocksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-44 h-32 bg-neutral-900 rounded-2xl">
      <span className="font-anton text-5xl text-red-500">{num}</span>
      <span className="font-outfit text-neutral-400">{text}</span>
    </div>
  );
}
