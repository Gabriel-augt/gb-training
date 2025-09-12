import QuestionAnswer from "./QuestionAnswer";
import { useTranslations } from "next-intl";

export default function faqContent() {
  const t = useTranslations('FAQ');
  return (
    <div className="mx-auto px-5 overflow-x-hidden">
      <div className="flex flex-col items-center mt-20 text-center"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-anchor-placement="top-bottom">
        <h1 className="font-anton tracking-wide text-3xl md:text-5xl sm:text-4xl">
          {t('title')}
        </h1>
        <h2 className="mt-2 text-neutral-400 text-2xl font-bold tracking-tight sm:text-3xl">
          FAQ
        </h2>
      </div>
      <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-800">
        <QuestionAnswer
          question={t('firstQuestion.question')}
          answer={t('firstQuestion.answer')}
        />
        <QuestionAnswer
          question={t('secondQuestion.question')}
          answer={t('secondQuestion.answer')}
        />
        <QuestionAnswer
          question={t('thirdQuestion.question')}
          answer={t('thirdQuestion.answer')}
        />
        <QuestionAnswer
          question={t('fourthQuestion.question')}
          answer={t('fourthQuestion.answer')}
        />
        <QuestionAnswer
          question={t('fifthQuestion.question')}
          answer={t('fifthQuestion.answer')}
        />
      </div>
    </div>
  );
}
