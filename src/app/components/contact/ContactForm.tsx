import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations('Contact');
  return (
    <div className="text-left p-10 border rounded-lg overflow-hidden space-y-6">
      <div className="inline-flex gap-4">
        <MessageSquare />
        <h1 className="text-xl">
          {t('form.title')}
        </h1>
      </div>
      <form>
        <div className="w-full space-y-4 text-lg">
          <div>
            <label className="text-xs text-neutral-400 ">
              {t('form.nameLabel')}
            </label>
            <input
              className="border block w-full border-gray-200 rounded-md px-5 py-3
              focus:outline-none focus:border-purple-800"
              type="email"
              placeholder={t('form.namePlaceholder')}
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 ">
              {t('form.emailLabel')}
            </label>
            <input
              className="border block w-full border-gray-200 rounded-md px-5 py-3
              focus:outline-none focus:border-purple-800"
              type="text"
              placeholder={t('form.emailPlaceholder')}
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 ">
              {t('form.messageLabel')}
            </label>
            <textarea
              className="border block w-full border-gray-200 rounded-md px-5 py-3 h-56
              resize-none focus:outline-none focus:border-purple-800"
              placeholder={t('form.messagePlaceholder')}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
