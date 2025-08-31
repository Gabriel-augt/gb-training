interface QuestionAnswerProps {
    question: string
    answer: string
}

export default function QuestionAnswer( {question, answer}: QuestionAnswerProps ) {
  return (
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span className="font-outfit text-2xl">
              {question}
            </span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn text-[18px] mt-3 text-neutral-600">
            {answer}
          </p>
        </details>
      </div>
  );
}
