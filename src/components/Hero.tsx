import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../styles/theme";
import { RouteNames } from "../types/RouteNames";

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroHeading>
      Perfect <StyledSpan>Plants</StyledSpan> for Your Space
    </HeroHeading>
    <StyledParagraph>
      Get healthy houseplants, succulents and air plants shipped directly from
      our plant shop to your door.
    </StyledParagraph>
    <Link to={`./${RouteNames.SHOP}`} aria-label="Shop button">
      <StyledButton>FIND YOUR PLANT</StyledButton>
    </Link>
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 600px;
  padding: 2em;
  background: url(../img/flat-lay-monstera-other-leaves.jpg) no-repeat;
  background-size: cover;
  background-position: 10%;
  text-align: center;
`;

const HeroHeading = styled.h1`
  margin: 0;
  font-size: 2.7rem;

  @media ${devices.mobileS} {
    font-size: 2.1rem;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primaryGreen};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.black};
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;

  @media ${devices.mobileS} {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  margin-bottom: 1em;
  padding: 1.125rem 3rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.offWhite};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
  }

  @media ${devices.mobileS} {
    padding: 0.75rem 1.875rem;
    font-size: 0.9rem;
  }

  @media ${devices.tabletM} {
    margin-bottom: 4em;
  }
`;
