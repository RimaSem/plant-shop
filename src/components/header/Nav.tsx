import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../styles/theme";
import { RouteNames } from "../../types/RouteNames";

const Nav: React.FC = () => (
  <StyledNav>
    <StyledNavLink to={RouteNames.HOME}>Home</StyledNavLink>
    <StyledNavLink to={RouteNames.HOME + RouteNames.SHOP}>Shop</StyledNavLink>
  </StyledNav>
);

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  gap: 2em;

  @media ${devices.mobileL} {
    gap: 1.2em;
  }

  @media ${devices.mobileS} {
    gap: 2em;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
