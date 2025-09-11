'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  type Languages = 'pt' | 'en' | 'es';
  const shortLocale = locale.split('-')[0] as Languages;
  const [isOpen, setIsOpen] = useState(false);

  const switchTo = (newLocale: Languages) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };
  const locales: Languages[] = ['pt', 'en', 'es'];
  const availableLocales = locales.filter((lang) => lang !== shortLocale);

  return (
    <div className="absolute right-0 top-16 inline-block text-left text-neutral-300 z-50
    max-lg:left-2 max-lg:top-4 max-lg:right-auto" data-aos="fade-left" data-aos-delay="700">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center w-full p-1 gap-1 text-sm font-medium
        shadow-sm rounded-md cursor-pointer hover:border-b hover:border-b-purple-800">
        {shortLocale.toUpperCase()}
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-4.5 w-max origin-top-right rounded-md shadow-lg
        max-lg:-left-1.5">
          <div>
            {availableLocales.map((lang) => (
              <button
                key={lang}
                onClick={() => switchTo(lang)}
                className="block w-full p-2 text-sm cursor-pointer rounded-md
                hover:border-b hover:border-b-purple-800">
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
