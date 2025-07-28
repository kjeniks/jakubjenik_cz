import Layout from "../components/Layout";
import { useLanguage } from "./_app";
import { translations } from "../locales";

export default function Home() {
  const { language, isHydrated } = useLanguage();
  if (!isHydrated) return null;
  const t = translations[language];

  const serviceCards = [
    {
      title: t.offer[0].title,
      desc: t.offer[0].desc,
      className: "service-card-automation",
      icon: "🔧",
    },
    {
      title: t.offer[1].title,
      desc: t.offer[1].desc,
      className: "service-card-strategy",
      icon: "📊",
    },
    {
      title: t.offer[2].title,
      desc: t.offer[2].desc,
      className: "service-card-mentorship",
      icon: "👨‍🏫",
    },
    {
      title: t.offer[3].title,
      desc: t.offer[3].desc,
      className: "service-card-workshops",
      icon: "🎓",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-primary py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {t.heroTitle}
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg inline-block text-center"
              >
                {t.bookCall}
              </a>
              <a
                href="#services"
                className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-block text-center shadow-lg"
              >
                {t.seeServices}
              </a>
            </div>
          </div>
          <div className="flex-1 text-center">
            <img
              src="images/jakub1.png"
              alt="QA Expert"
              className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-light py-20" id="about">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t.about1}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">{t.about2}</p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-brown to-primary-red rounded-2xl flex items-center justify-center text-white text-6xl opacity-10">
              QA
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-white py-20" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gradient">
            {t.offerTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <div
                key={service.title}
                className={`${service.className} p-8 rounded-2xl shadow-lg`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-accent py-20" id="topics">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
            {t.topicsTitle}
          </h2>
          <ul className="enhanced-list text-slate-700 text-lg max-w-3xl mx-auto space-y-4">
            {t.topics.map((topic) => (
              <li key={topic} className="text-lg">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-white py-20" id="courses">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
            {t.coursesTitle}
          </h2>
          <div className="max-w-4xl mx-auto">
            <table className="enhanced-table w-full">
              <thead>
                <tr>
                  {t.courseHeaders.map((h) => (
                    <th key={h} className="px-6 py-4 text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.courses.map((c) => (
                  <tr key={c.name} className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">{c.name}</td>
                    <td className="px-6 py-4">{c.date}</td>
                    <td className="px-6 py-4">{c.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact-gradient py-16 text-center relative"
        id="contact"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {t.contactTitle}
          </h2>
          <a
            href="mailto:kjeniks@gmail.com"
            className="btn-secondary px-10 py-4 rounded-xl font-semibold text-lg inline-block"
          >
            {t.contactBtn}
          </a>
        </div>
      </section>
    </Layout>
  );
}
