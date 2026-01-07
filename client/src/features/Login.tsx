import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-[30%] flex items-center justify-center px-4 pb-8">
      <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg">
        {/* Header */}
        <div className="border-b border-neutral-800 px-6 py-4">
          <h1 className="text-xl font-semibold text-neutral-100">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-neutral-400">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 px-6 py-6"
        >
          {/* Email */}
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full rounded-md border border-neutral-800
                bg-neutral-950 px-3 py-2 text-sm text-neutral-100
                placeholder:text-neutral-500
                outline-none
                focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full rounded-md border border-neutral-800
                bg-neutral-950 px-3 py-2 text-sm text-neutral-100
                placeholder:text-neutral-500
                outline-none
                focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-2 inline-flex items-center justify-center
              rounded-md bg-neutral-100 px-4 py-2 text-sm font-semibold
              text-neutral-900 transition
              hover:bg-neutral-300
              active:scale-[0.98]
            "
          >
            Login
          </button>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-neutral-400">
            New here?{" "}
            <Link
              to="/auth/register"
              className="font-medium text-neutral-100 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
