import Layout from "../components/Layout";

export default function Home() {
  const topics = [
    "Cypress from Zero to Hero",
    "Playwright Advanced Techniques",
    "Effective QA Strategy Design",
    "CI/CD Integration for Test Automation",
    "Monitoring E2E Tests with Grafana",
    "Mentoring QA Engineers 1:1",
  ];

  const courses = [
    { name: "Cypress Basics", date: "2025-08-12", location: "Online" },
    { name: "QA Strategy Bootcamp", date: "2025-09-03", location: "Prague" },
    { name: "Playwright in Practice", date: "2025-10-15", location: "Online" },
  ];

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              QA Automation Expert & Mentor
            </h1>
            <p className="text-lg mb-6 text-slate-600">
              Helping teams deliver better software with advanced test automation, QA strategy, and mentoring.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#8B5E3C] hover:bg-[#734d31] text-white font-semibold px-6 py-3 rounded-xl shadow"
              >
                Book a Call
              </a>
              <a
                href="#services"
                className="bg-[#E63946] hover:bg-[#c5303b] text-white font-semibold px-6 py-3 rounded-xl shadow"
              >
                See Services
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">About Me</h2>
            <p className="text-lg text-slate-600 mb-4">
              With years of experience in QA automation and testing strategy, I help businesses improve
              their software quality, reduce release cycles, and implement efficient automation solutions.
            </p>
            <p className="text-lg text-slate-600">
              I also provide mentoring and workshops to help QA engineers and teams upgrade their skills.
            </p>
          </div>
          <div className="flex-1 text-center">
           
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-900">What I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Test Automation", desc: "Custom Cypress & Playwright solutions tailored to your needs." },
              { title: "QA Strategy", desc: "Designing scalable, maintainable testing strategies." },
              { title: "Mentorship", desc: "1:1 guidance for QA beginners and professionals." },
              { title: "Workshops", desc: "Hands-on training and bootcamps for teams or individuals." },
            ].map((s) => (
              <div key={s.title} className="bg-[#F9F9F9] p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-[#8B5E3C]">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F9F9]" id="topics">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Topics & Consulting Areas</h2>
          <ul className="list-disc list-inside text-slate-700 text-lg max-w-2xl mx-auto space-y-2">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" id="courses">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Upcoming Courses</h2>
          <table className="table-auto mx-auto text-left text-slate-700 text-lg">
            <thead>
              <tr>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
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

      <section className="bg-[#8B5E3C] text-white py-12 text-center" id="contact">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your QA?</h2>
        <a
          href="mailto:kjeniks@gmail.com"
          className="inline-block bg-[#E63946] hover:bg-[#c5303b] text-white font-semibold px-8 py-3 rounded-xl shadow"
        >
          Let’s Talk
        </a>
      </section>
    </Layout>
  );
}