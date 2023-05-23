import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Cart from "./cart/Cart";
import styled from "styled-components";

const Layout: React.FC = () => {
  const [overlayHidden, setOverlayHidden] = useState(true);

  const hideOverlay = () => {
    setOverlayHidden(true);
    document.body.style.overflowY = "visible";
  };

  return (
    <>
      <StyledOverlay
        onClick={hideOverlay}
        overlayHidden={overlayHidden}
      ></StyledOverlay>
      <SiteWrapper>
        <Cart overlayHidden={overlayHidden} hideOverlay={hideOverlay} />
        <Header
          overlayHidden={overlayHidden}
          setOverlayHidden={setOverlayHidden}
        />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </SiteWrapper>
    </>
  );
};

export default Layout;

interface StyledOverlayProps {
  overlayHidden: boolean;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  z-index: 1002;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  visibility: ${(overlayHidden) => (overlayHidden ? "hidden" : "visible")};
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
