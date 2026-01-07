import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { ToastContainer } from "react-toastify";

function Body() {
  return (
    <main className="h-full w-full">
      <Header />
      <section className="">
        <Outlet />
      </section>
      <Footer />
      <ToastContainer position="top-right" autoClose={4000} pauseOnHover />

    </main>
  );
}

export default Body;
