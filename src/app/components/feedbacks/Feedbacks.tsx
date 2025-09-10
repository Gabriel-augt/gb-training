import FeedbackContents from "./FeedbackContents";
import { useTranslations } from "next-intl";

export default function Feedbacks() {
  const t = useTranslations('HomePage.anchors');
  return (
    <div id={t('feedbackAnchor')} className="bg-black">
      <FeedbackContents />
    </div>
  );
}
