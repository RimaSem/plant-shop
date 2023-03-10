import "./scss/Layout.scss";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

export default function Layout() {
  const overlayRef = useRef<HTMLDivElement>(null);

  function hideOverlay() {
    const cart = document.querySelector(".cart-container") as HTMLElement;
    const body = document.querySelector("body") as HTMLElement;
    if (overlayRef.current && cart && body) {
      overlayRef.current.style.visibility = "hidden";
      cart.classList.remove("active");
      body.style.overflowY = "visible";
    }
  }

  return (
    <>
      <div ref={overlayRef} className="overlay" onClick={hideOverlay}></div>
      <div className="site-wrapper">
        <Cart />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
