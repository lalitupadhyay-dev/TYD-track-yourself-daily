import { Outlet } from "react-router-dom";

import Header from "../components/system/Header.tsx";
import Sidebar from "../components/system/Sidebar.tsx";
import Footer from "../components/Footer.tsx";

function AppLayout() {
  return (
    <section className="h-full w-full app-layout overflow-hidden">
      <Header />

      <main className="h-[85%] flex">
        <Sidebar />
        <section className="w-[85%] text-white">
          <Outlet />
        </section>
      </main>

      <Footer />
    </section>
  );
}

export default AppLayout;
