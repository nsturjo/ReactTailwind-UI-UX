'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const languageNames: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  bn: 'বাংলা',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
    router.refresh();
  };

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="appearance-none bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-1.5 text-sm text-zinc-900 dark:text-zinc-100 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {languageNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}

