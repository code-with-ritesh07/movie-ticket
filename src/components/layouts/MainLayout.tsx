import { Navbar } from "../Home/Navbar";
import { Footer } from "../Home/Footer";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-h-screen flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
