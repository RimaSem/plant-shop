import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../appContext";
import { Icon } from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import styled from "styled-components";
import { devices } from "../styles/theme";
import CartItem from "./cart/CartItem";

interface CartProps {
  overlayHidden: boolean;
  hideOverlay: () => void;
}

const Cart: React.FC<CartProps> = ({ overlayHidden, hideOverlay }) => {
  const context = useContext(AppContext);
  // const closeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (overlayHidden && closeRef.current) {
  //     closeRef.current.style.right = "0";
  //   }
  // }, [overlayHidden]);

  const calculateTotalPrice = () => {
    const total = context?.cart?.reduce((prev, current) => {
      return prev + current.quantity * current.price;
    }, 0);
    return `Total: €${total}.00`;
  };

  return (
    <CartContainer overlayHidden={overlayHidden}>
      <CloseCartButton onClick={hideOverlay}>
        <Icon path={mdiWindowClose} />
      </CloseCartButton>
      <CartContent>
        {!context?.cart?.length ? (
          <CartHeading>Your cart is empty</CartHeading>
        ) : (
          context?.cart?.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        )}
        {Number(context?.cart?.length) > 0 && (
          <CheckoutWrapper>
            <PriceHeading>{calculateTotalPrice()}</PriceHeading>
            <StyledButton>Checkout</StyledButton>
          </CheckoutWrapper>
        )}
      </CartContent>
    </CartContainer>
  );
};

export default Cart;

interface CartContainerProps {
  overlayHidden: boolean;
}

const CartContainer = styled.div<CartContainerProps>`
  z-index: 1003;
  position: fixed;
  right: ${(overlayHidden) => (overlayHidden ? "0" : "-600px")};
  display: flex;
  flex-direction: column;
  transition: right 0.5s;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.offWhite};

  @media ${devices.mobileL} {
    width: 520px;
  }
`;

const CloseCartButton = styled.div`
  margin: 1em 1em 1em auto;
  width: 2em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverRed};
  }
`;

const CartContent = styled.div`
  margin: 0 auto;
  width: 95%;
  overflow-y: scroll;
`;

const CartHeading = styled.h1`
  text-align: center;
`;

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  font-size: 1.5rem;
`;

const PriceHeading = styled.h3``;

const StyledButton = styled.button`
  border: none;
  width: 40%;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
  }
`;
