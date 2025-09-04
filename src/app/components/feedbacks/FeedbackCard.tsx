interface FeedbackCardProps {
  testimonials: string;
  author: string;
  imageOne: string;
  imageTwo: string;
}

import Image from "next/image";

export default function FeedbackCard({ testimonials, author, imageOne, imageTwo }: FeedbackCardProps) {
  return (
    <section className="flex items-center justify-center gap-11 w-full h-full">
      <div className="flex flex-col">
        <div
          className="flex flex-col items-center gap-6 text-center justify-center w-[550px]
          h-max rounded-t-lg rounded-b-3xl border border-purple-800 rounded-2xl border-x-0
          max-md:w-full">
          <figure className="w-[520px] h-60 max-sm:h-max max-sm:w-[354px]">
            <svg
              className="h-12 mx-auto mb-3 text-gray-40 mt-6"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20
                8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="#6e11b0" />
            </svg>
            <blockquote>
              <p className="text-2xl font-outfit font-medium text-white max-md:text-xl">
                {testimonials}
              </p>
            </blockquote>
            <div className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500">
                <span className="font-outfit text-2xl pr-3 font-medium text-neutral-400 max-md:text-lg">
                    {author}
                </span>
              </div>
            </div>
          </figure>
          <div className="flex items-center justify-center relative w-auto h-auto">
            <Image
              className="object-cover w-72 h-[400px] rounded-bl-3xl max-sm:w-1/2"
              src={imageOne}
              alt="Feedback"
              width={535}
              height={880} />
            <Image
              className="object-cover w-72 h-[400px] rounded-br-3xl max-sm:w-1/2"
              src={imageTwo}
              alt="Feedback"
              width={535}
              height={880} />
          </div>
        </div>
      </div>
    </section>
  );
}
