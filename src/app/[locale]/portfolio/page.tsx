import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Portfolio() {
  const t = useTranslations();
  const locale = useLocale();

  const getLocalizedHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {t('nav.portfolio')}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Coming soon...
          </p>
        </div>
        <div className="text-center">
          <Link 
            href={getLocalizedHref('/')} 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

