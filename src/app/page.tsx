import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaSify
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Testimonials
              </a>
              <Link href="/portfolio" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Portfolio
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-4 py-2">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                Get Started
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
                🚀 New: AI-Powered Analytics
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With One Platform
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Streamline your workflow, boost productivity, and scale your business with our all-in-one SaaS platform. Join thousands of teams already using SaaSify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/50">
                Start Free Trial
              </button>
              <button className="border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
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
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Powerful features designed to help you work smarter, not harder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Built for speed with cutting-edge technology. Experience instant load times and seamless performance."
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level encryption and security protocols to keep your data safe and compliant."
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                description: "Real-time insights and customizable dashboards to make data-driven decisions."
              },
              {
                icon: "🤖",
                title: "AI-Powered",
                description: "Leverage artificial intelligence to automate tasks and boost productivity."
              },
              {
                icon: "🔗",
                title: "Integrations",
                description: "Connect with 100+ popular tools and services you already use."
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                description: "Access your workspace from anywhere with our native mobile apps."
              }
            ].map((feature, index) => (
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
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              See what our customers have to say
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content: "SaaSify has completely transformed how we work. Our productivity has increased by 40% since switching.",
                avatar: "👩"
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateLab",
                content: "The best investment we've made. The platform is intuitive, powerful, and the support team is exceptional.",
                avatar: "👨"
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, GrowthCo",
                content: "We've tried many tools, but nothing comes close to SaaSify. It's become essential to our daily operations.",
                avatar: "👩"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">
                  "{testimonial.content}"
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "per month",
                description: "Perfect for individuals and small teams",
                features: [
                  "Up to 5 team members",
                  "10GB storage",
                  "Basic analytics",
                  "Email support",
                  "Mobile app access"
                ],
                cta: "Start Free Trial",
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "per month",
                description: "Best for growing businesses",
                features: [
                  "Up to 25 team members",
                  "100GB storage",
                  "Advanced analytics",
                  "Priority support",
                  "API access",
                  "Custom integrations"
                ],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: [
                  "Unlimited team members",
                  "Unlimited storage",
                  "Dedicated support",
                  "Custom SLA",
                  "On-premise deployment",
                  "Advanced security"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
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
                      Most Popular
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
                  {plan.features.map((feature, i) => (
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams already using SaaSify to transform their workflow
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Free Trial
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
                SaaSify
              </span>
              <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                Transform your business with our all-in-one platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Blog</a></li>
                <li><Link href="/portfolio" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Portfolio</Link></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Legal</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2024 SaaSify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
