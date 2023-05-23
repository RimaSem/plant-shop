import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import styled from "styled-components";

const Layout: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayHidden, setOverlayHidden] = useState(false);

  const hideOverlay = () => {
    if (overlayRef.current) {
      setOverlayHidden(true);
      overlayRef.current.style.visibility = "hidden";
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <>
      <StyledOverlay
        ref={overlayRef}
        className="overlay"
        onClick={hideOverlay}
      ></StyledOverlay>
      <SiteWrapper>
        <Cart overlayHidden={overlayHidden} hideOverlay={hideOverlay} />
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </SiteWrapper>
    </>
  );
};

export default Layout;

const StyledOverlay = styled.div`
  z-index: 1002;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  visibility: hidden;
`;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex: 1;
`;
