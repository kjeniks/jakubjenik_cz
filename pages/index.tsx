import Layout from "../components/Layout";
import { useLanguage } from "./_app";
import { translations } from "../locales";

export default function Home() {
  const { language, isHydrated } = useLanguage();
  if (!isHydrated) return null;
  const t = translations[language];

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              {t.heroTitle}
            </h1>
            <p className="text-lg mb-6 text-slate-600">{t.heroDesc}</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#8B5E3C] hover:bg-[#734d31] text-white font-semibold px-6 py-3 rounded-xl shadow"
              >
                {t.bookCall}
              </a>
              <a
                href="#services"
                className="bg-[#E63946] hover:bg-[#c5303b] text-white font-semibold px-6 py-3 rounded-xl shadow"
              >
                {t.seeServices}
              </a>
            </div>
          </div>
          <div className="flex-1 text-center">
            <img
              src="images/jakub1.png"
              alt="QA Expert"
              className="w-72 h-72 object-cover rounded-xl mx-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F9F9]" id="about">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-slate-600 mb-4">{t.about1}</p>
            <p className="text-lg text-slate-600">{t.about2}</p>
          </div>
          <div className="flex-1 text-center">
            {/* Optionally add an about image here */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-900">
            {t.offerTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.offer.map((s: any) => (
              <div
                key={s.title}
                className="bg-[#F9F9F9] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#8B5E3C]">
                  {s.title}
                </h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F9F9]" id="topics">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">
            {t.topicsTitle}
          </h2>
          <ul className="list-disc list-inside text-slate-700 text-lg max-w-2xl mx-auto space-y-2">
            {t.topics.map((topic: string) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" id="courses">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">
            {t.coursesTitle}
          </h2>
          <table className="table-auto mx-auto text-left text-slate-700 text-lg">
            <thead>
              <tr>
                {t.courseHeaders.map((h: string) => (
                  <th key={h} className="px-4 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.courses.map((c: any) => (
                <tr key={c.name}>
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.date}</td>
                  <td className="px-4 py-2">{c.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="bg-[#8B5E3C] text-white py-12 text-center"
        id="contact"
      >
        <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
        <a
          href="mailto:kjeniks@gmail.com"
          className="inline-block bg-[#E63946] hover:bg-[#c5303b] text-white font-semibold px-8 py-3 rounded-xl shadow"
        >
          {t.contactBtn}
        </a>
      </section>
    </Layout>
  );
}
