import Nav from "./Nav";
import styled from "styled-components";
import { devices } from "../../styles/theme";
import Logo from "./Logo";
import Icons from "./Icons";

export interface HeaderProps {
  overlayHidden: boolean;
  setOverlayHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ overlayHidden, setOverlayHidden }) => (
  <StyledHeader>
    <Logo />
    <Nav />
    <Icons overlayHidden={overlayHidden} setOverlayHidden={setOverlayHidden} />
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  z-index: 1001;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.offWhite};

  @media ${devices.mobileL} {
    padding: 1em 0.5em;
  }
`;
