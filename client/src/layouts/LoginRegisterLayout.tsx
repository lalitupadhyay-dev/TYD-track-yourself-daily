import { Outlet, useNavigate } from "react-router-dom";

function LoginRegisterLayout() {
  const navigate = useNavigate();

  return (
    <section className="pt-8 flex relative justify-center">
      <button
        className="absolute top-5 left-5 text-sm border border-black cursor-pointer px-4 py-1 rounded-md mx-auto font-bold block dark:text-white dark:bg-zinc-800 transition-all duration-100 hover:border-zinc-400"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <Outlet />
    </section>
  );
}

export default LoginRegisterLayout;
