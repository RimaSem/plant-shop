import styled from "styled-components";
import { RouteNames } from "../../types/RouteNames";
import { Link } from "react-router-dom";
import logo from "../../img/plant-shop-logo.png";
import { devices } from "../../styles/theme";

const Logo: React.FC = () => (
  <StyledLink to={RouteNames.HOME} aria-label="Logo">
    <LogoContainer>
      <StyledImage src={logo} alt="Header logo" />
      <LogoTitle>GetPlants</LogoTitle>
    </LogoContainer>
  </StyledLink>
);

export default Logo;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-bottom: 1em;
  height: 4rem;

  @media ${devices.mobileL} {
    display: none;
  }
`;

const LogoTitle = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 2.3rem;

  @media ${devices.mobileL} {
    font-size: 1.8rem;
  }

  @media ${devices.mobileS} {
    display: none;
  }
`;
