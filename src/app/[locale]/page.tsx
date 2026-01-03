import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  const getLocalizedHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  const features = [
    {
      icon: "⚡",
      title: t('features.lightningFast.title'),
      description: t('features.lightningFast.description')
    },
    {
      icon: "🔒",
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: "📊",
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: "🤖",
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: "🔗",
      title: t('features.integrations.title'),
      description: t('features.integrations.description')
    },
    {
      icon: "📱",
      title: t('features.mobile.title'),
      description: t('features.mobile.description')
    }
  ];

  const testimonials = [
    {
      name: t('testimonials.sarah.name'),
      role: t('testimonials.sarah.role'),
      content: t('testimonials.sarah.content'),
      avatar: "👩"
    },
    {
      name: t('testimonials.michael.name'),
      role: t('testimonials.michael.role'),
      content: t('testimonials.michael.content'),
      avatar: "👨"
    },
    {
      name: t('testimonials.emily.name'),
      role: t('testimonials.emily.role'),
      content: t('testimonials.emily.content'),
      avatar: "👩"
    }
  ];

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      features: t.raw('pricing.starter.features'),
      cta: t('pricing.starter.cta'),
      popular: false
    },
    {
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      features: t.raw('pricing.professional.features'),
      cta: t('pricing.professional.cta'),
      popular: true
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      description: t('pricing.enterprise.description'),
      features: t.raw('pricing.enterprise.features'),
      cta: t('pricing.enterprise.cta'),
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={getLocalizedHref('/')} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('nav.brand')}
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t('nav.features')}
              </a>
              <a href="#pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t('nav.pricing')}
              </a>
              <a href="#testimonials" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t('nav.testimonials')}
              </a>
              <Link href={getLocalizedHref('/portfolio')} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t('nav.portfolio')}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-4 py-2">
                {t('nav.signIn')}
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
              {t('hero.title')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/50">
                {t('hero.startTrial')}
              </button>
              <button className="border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                {t('hero.watchDemo')}
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.noCard')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.freeTrial')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.cancelAnytime')}</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 shadow-2xl">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6"></div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {t('pricing.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-800 p-8 rounded-xl border-2 ${
                  plan.popular
                    ? "border-blue-500 dark:border-blue-400 shadow-xl scale-105"
                    : "border-zinc-200 dark:border-zinc-700"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-opacity ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                      : "border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('cta.subtitle')}
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              {t('cta.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('nav.brand')}
              </span>
              <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.features')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.pricing')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.security')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.updates')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.about')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.blog')}</a></li>
                <li><Link href={getLocalizedHref('/portfolio')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.portfolio')}</Link></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.terms')}</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.cookiePolicy')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-zinc-600 dark:text-zinc-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
