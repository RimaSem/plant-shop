import "./scss/Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Cart />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
