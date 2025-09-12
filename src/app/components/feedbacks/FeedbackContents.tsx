import FeedbackCard from "./FeedbackCard";
import { useTranslations } from "next-intl";

export default function FeedbackContents() {
  const t = useTranslations('Feedbacks');
  return (
    <div
      className="flex flex-col items-center justify-center gap-12 pt-16
      h-screen w-full overflow-x-hidden max-[1280px]:h-max max-lg:gap-14 max-lg:pt-20">
      <h1 className="font-anton tracking-wide text-3xl mt-3 text-center md:text-5xl sm:text-4xl"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-anchor-placement="top-bottom">
        {t('title')}
      </h1>
      <section className="flex flex-row gap-32 max-[1280px]:flex-col  max-[1280px]:gap-16">
        <FeedbackCard
          testimonials={t('firstFeedback.testimonial')}
          author="Daniele Debbians"
          imageOne="/feedback1a.jpg"
          imageTwo="/feedback1b.jpg"
        />
        <FeedbackCard
          testimonials={t('secondFeedback.testimonial')}
          author="Stter Suns"
          imageOne="/feedback2a.jpg"
          imageTwo="/feedback2b.jpg"
        />
      </section>
    </div>
  );
}
