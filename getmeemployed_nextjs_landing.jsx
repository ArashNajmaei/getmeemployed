export default function GetMeEmployedLanding() {
  const courses = [
    {
      title: "Power BI Data Analytics and Dashboarding",
      category: "Data & BI",
      duration: "2-day intensive",
      description:
        "Build dashboards, turn raw data into insight, and learn the reporting skills employers actively look for.",
      audience: "Students, graduates, career changers",
    },
    {
      title: "Data Analytics with Excel, SQL and Power BI",
      category: "Analytics",
      duration: "1-week bootcamp",
      description:
        "A practical analyst pathway covering spreadsheet analysis, querying, and visual storytelling.",
      audience: "Aspiring analysts and business graduates",
    },
    {
      title: "SQL for Data Analysis",
      category: "Data",
      duration: "2-day workshop",
      description:
        "Learn the core SQL skills needed for reporting, analytics, and entry-level data roles.",
      audience: "Beginners and junior analysts",
    },
    {
      title: "Python for Data Analytics and Automation",
      category: "Data & Automation",
      duration: "1-week bootcamp",
      description:
        "Use Python to clean data, automate tasks, and build job-ready analytical workflows.",
      audience: "Students with basic tech confidence",
    },
    {
      title: "Azure Fundamentals",
      category: "Cloud",
      duration: "2-day intensive",
      description:
        "Start your cloud journey with Microsoft Azure and build confidence for entry-level cloud roles.",
      audience: "ICT students and beginners",
    },
    {
      title: "AWS Cloud Practitioner",
      category: "Cloud",
      duration: "2-day intensive",
      description:
        "A beginner-friendly pathway into cloud literacy, architecture basics, and modern infrastructure concepts.",
      audience: "Students, graduates, non-technical starters",
    },
    {
      title: "Cybersecurity Foundations",
      category: "Cybersecurity",
      duration: "3-day workshop",
      description:
        "Learn cyber basics, threats, controls, and practical security awareness for entry-level pathways.",
      audience: "ICT students and career changers",
    },
    {
      title: "AI Literacy and Prompting for Work",
      category: "AI",
      duration: "1-day workshop",
      description:
        "Use AI tools productively and responsibly for research, writing, coding, and workflow support.",
      audience: "All students and professionals",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                GetMeEmployed.com
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Job-ready short courses that help people move from interest to employment.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Explore practical bootcamps in data, Power BI, cloud, cybersecurity, AI, and digital skills.
                Register your interest and help us decide which programs to launch first.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#courses"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
                >
                  Explore courses
                </a>
                <a
                  href="#waitlist"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Join waitlist
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">8+</div>
                  <div>launch-ready courses</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">1–5 days</div>
                  <div>short intensive formats</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">Live demand</div>
                  <div>waitlist-first model</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Why Get Me Employed?</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200">
                  Career-focused
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Courses aligned to current employability needs",
                  "Practical workshops, not theory-heavy lectures",
                  "Ideal for students, graduates, and career changers",
                  "Designed to test demand before full launch",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Top courses</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vote with your interest. We’ll launch the most in-demand programs first.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Each course is structured as a short, job-oriented program that can be delivered as a workshop,
            intensive, or bootcamp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {course.category}
                </span>
                <span className="text-sm text-slate-500">{course.duration}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-slate-900">{course.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{course.description}</p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Best for:</span> {course.audience}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="#waitlist"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Register interest
                </a>
                <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              We validate demand first, then run the strongest courses.
            </h2>
            <div className="mt-8 grid gap-5">
              {[
                ["1", "Explore the shortlist", "Review the most employable course options across data, cloud, AI, cyber, and software."],
                ["2", "Join the waitlist", "Tell us which course you want, how you want it delivered, and when you are ready."],
                ["3", "We launch the winners", "The highest-demand courses move first into workshop, intensive, or bootcamp delivery."],
              ].map(([step, title, text]) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="waitlist" className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Join the priority waitlist</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Be first to hear when a course opens, a pilot workshop launches, or early-bird offers become available.
            </p>

            <form className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Course of interest</label>
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-sky-400 focus:outline-none">
                  <option className="text-slate-900">Power BI Data Analytics and Dashboarding</option>
                  <option className="text-slate-900">Data Analytics with Excel, SQL and Power BI</option>
                  <option className="text-slate-900">SQL for Data Analysis</option>
                  <option className="text-slate-900">Python for Data Analytics and Automation</option>
                  <option className="text-slate-900">Azure Fundamentals</option>
                  <option className="text-slate-900">AWS Cloud Practitioner</option>
                  <option className="text-slate-900">Cybersecurity Foundations</option>
                  <option className="text-slate-900">AI Literacy and Prompting for Work</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Preferred mode</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-sky-400 focus:outline-none">
                    <option className="text-slate-900">Online</option>
                    <option className="text-slate-900">Face-to-face</option>
                    <option className="text-slate-900">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Preferred format</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-sky-400 focus:outline-none">
                    <option className="text-slate-900">1-day workshop</option>
                    <option className="text-slate-900">2-day intensive</option>
                    <option className="text-slate-900">1-week bootcamp</option>
                    <option className="text-slate-900">Evening sessions</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Anything else you want from the course?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what would make this course useful for you"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Join the waitlist
              </button>
              <p className="text-xs leading-5 text-slate-400">
                By submitting this form, you agree to receive updates about courses, workshops, and launch offers.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-900 to-sky-900 px-8 py-12 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Early stage launch</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Help shape the first cohort of Get Me Employed.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                Register interest now and we’ll prioritise the courses, schedules, and delivery formats that the market wants most.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="#waitlist"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Join the waitlist
              </a>
              <a
                href="#courses"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
