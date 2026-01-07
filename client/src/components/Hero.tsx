import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-8">
        <div className="mx-auto max-w-6xl py-24">
          <h2 className="max-w-4xl text-5xl font-bold leading-tight">
            The last task manager your team will ever need.
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            Plan projects, assign ownership, track progress, and gain deep
            insights — all from a single, fast, and secure platform built for
            modern teams.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="p-[.1rem] rounded-lg overflow-hidden relative">
              <div className="rotater"></div>
              <button
                id="get-started-btn"
                className="relative border border-dashed border-black cursor-pointer rounded-md bg-neutral-900 px-7 py-3 text-sm font-semibold text-white transition hover:border-neutral-400"
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Get Started — It’s Free
              </button>
            </div>
            {/* <button className="rounded-md border border-neutral-700 px-7 py-3 text-sm hover:bg-neutral-900 transition">
              Book a Demo
            </button> */}
          </div>

          {/* <p className="mt-4 text-xs text-gray-500">
            No credit card required · Cancel anytime
          </p> */}
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-neutral-950 px-8 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-5">
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl font-bold">120K+</h3>
            <p className="text-sm text-gray-400">✔ Tasks completed monthly</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl font-bold">2,500+</h3>
            <p className="text-sm text-gray-400">👥 High-performing teams</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p className="text-sm text-gray-400">📌 Platform uptime</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl font-bold">4.8 / 5</h3>
            <p className="text-sm text-gray-400">⭐ Average user rating</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl font-bold">87%</h3>
            <p className="text-sm text-gray-400">
              ⏱️ Projects delivered on time
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold">
              Stop losing <span className="text-green-600">time</span> managing{" "}
              <span className="text-purple-500">work</span>.
            </h3>
            <p className="mt-6 text-gray-400">
              Spreadsheets, chats, and disconnected tools slow teams down.
              Important tasks get lost, deadlines slip, and accountability
              breaks.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              One <span className="text-pink-600">system</span>. Total{" "}
              <span className="text-yellow-600">clarity</span>.
            </h3>
            <p className="mt-6 text-gray-400">
              Task Manager centralizes everything — tasks, priorities,
              ownership, and progress — so your team always knows what to do
              next.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-8 py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-800 p-6">
            <h4 className="text-lg font-semibold">Real-Time Insights</h4>
            <p className="mt-3 text-sm text-gray-400">
              Track overdue tasks, workload distribution, and productivity
              trends with powerful analytics dashboards.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-800 p-6">
            <h4 className="text-lg font-semibold">Built for Teams</h4>
            <p className="mt-3 text-sm text-gray-400">
              Assign tasks, collaborate in context, and keep everyone aligned —
              without unnecessary meetings.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-800 p-6">
            <h4 className="text-lg font-semibold">Enterprise Ready</h4>
            <p className="mt-3 text-sm text-gray-400">
              Role-based access, audit logs, secure APIs, and scalability for
              teams of any size.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold">
            Move faster. Stay organized. Deliver more.
          </h3>

          <p className="mt-6 text-gray-400">
            Join thousands of teams already managing work smarter with Task
            Manager.
          </p>

          {/* <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-md bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition">
              Start Free Trial
            </button>
            <button className="rounded-md border border-neutral-700 px-8 py-4 text-sm hover:bg-neutral-900 transition">
              Talk to Sales
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
