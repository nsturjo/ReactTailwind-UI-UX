import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function CreativeAgency({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('creativeAgency');
  const getLocalizedHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href={getLocalizedHref('/creative-agency')} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t('nav.brand')}
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium">
                {t('nav.work')}
              </a>
              <a href="#services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium">
                {t('nav.services')}
              </a>
              <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium">
                {t('nav.contact')}
              </a>
            </div>
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
              {t('nav.letsTalk')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
                  {t('hero.badge')}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
                {t('hero.title')}
                <br />
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/50">
                  {t('hero.viewWork')}
                </button>
                <button className="border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  {t('hero.process')}
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8 text-sm text-zinc-500 dark:text-zinc-400">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">200+</div>
                  <div>{t('hero.projectsDelivered')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">50+</div>
                  <div>{t('hero.happyClients')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">15+</div>
                  <div>{t('hero.yearsExperience')}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">🎨</div>
                    <div className="text-2xl font-bold">Creative Portfolio</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-200 dark:bg-pink-900/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: t('services.brandIdentity.title'),
                description: t('services.brandIdentity.description')
              },
              {
                icon: "💻",
                title: t('services.webDesign.title'),
                description: t('services.webDesign.description')
              },
              {
                icon: "📱",
                title: t('services.uiUxDesign.title'),
                description: t('services.uiUxDesign.description')
              },
              {
                icon: "🎬",
                title: t('services.motionGraphics.title'),
                description: t('services.motionGraphics.description')
              },
              {
                icon: "📸",
                title: t('services.photography.title'),
                description: t('services.photography.description')
              },
              {
                icon: "🚀",
                title: t('services.digitalStrategy.title'),
                description: t('services.digitalStrategy.description')
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('work.title')}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              {t('work.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "EcoTech Brand Identity",
                category: "Branding",
                image: "🌱",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Fashion E-Commerce",
                category: "Web Design",
                image: "👗",
                gradient: "from-pink-500 to-rose-600"
              },
              {
                title: "FinTech Mobile App",
                category: "UI/UX Design",
                image: "💳",
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                title: "Restaurant Website",
                category: "Web Design",
                image: "🍽️",
                gradient: "from-orange-500 to-amber-600"
              },
              {
                title: "Tech Startup Branding",
                category: "Branding",
                image: "🚀",
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                title: "Fitness App Design",
                category: "UI/UX Design",
                image: "💪",
                gradient: "from-red-500 to-pink-600"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110`}>
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-sm text-white/80 mb-1">{project.category}</div>
                    <div className="text-xl font-bold text-white">{project.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              {t('work.viewAllProjects')}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {t('about.title')}
                <br />
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('about.titleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {t('about.description2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">15+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">{t('about.yearsExcellence')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">200+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">{t('about.projectsCompleted')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">50+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">{t('about.globalClients')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">25+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">{t('about.teamMembers')}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Sarah Chen", role: "Creative Director", avatar: "👩‍🎨" },
                { name: "Marcus Johnson", role: "Lead Designer", avatar: "👨‍💻" },
                { name: "Emma Wilson", role: "UX Strategist", avatar: "👩‍💼" },
                { name: "David Kim", role: "Developer", avatar: "👨‍💻" }
              ].map((member, index) => (
                <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-3xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    {member.name}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            {[
              {
                name: "Jessica Martinez",
                company: "EcoTech Solutions",
                content: "CreativeStudio transformed our brand completely. Their attention to detail and creative vision exceeded all our expectations. We couldn't be happier!",
                avatar: "👩"
              },
              {
                name: "Robert Thompson",
                company: "Fashion Forward",
                content: "Working with CreativeStudio was a game-changer. They understood our vision and brought it to life in ways we never imagined. Highly recommended!",
                avatar: "👨"
              },
              {
                name: "Amanda Lee",
                company: "TechStart Inc",
                content: "The team at CreativeStudio is incredibly talented and professional. They delivered a stunning website that perfectly represents our brand. Outstanding work!",
                avatar: "👩"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              {t('cta.scheduleCall')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
              {t('cta.viewPortfolio')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t('nav.brand')}
              </span>
              <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('services.brandIdentity.title')}</a></li>
                <li><a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('services.webDesign.title')}</a></li>
                <li><a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('services.uiUxDesign.title')}</a></li>
                <li><a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('services.motionGraphics.title')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.about')}</a></li>
                <li><a href="#work" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.work')}</a></li>
                <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('nav.contact')}</a></li>
                <li><Link href={getLocalizedHref('/')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{t('footer.home')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{t('footer.connect')}</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Dribbble</a></li>
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

