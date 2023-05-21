import React, { useState, useEffect } from "react";
import data from "./data";

interface appContextProviderProps {
  children: React.ReactNode;
}

interface allItemsType {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  isFavorite: boolean;
  forBeginners: boolean;
  isPetSafe: boolean;
}

interface cartType {
  id: number;
  quantity: number;
  price: number;
}

interface AppContextType {
  allItems: allItemsType[];
  setAllItems: React.Dispatch<React.SetStateAction<allItemsType[]>>;
  toggleFavorite: (id: number) => void;
  cart: cartType[] | null;
  setCart: React.Dispatch<React.SetStateAction<cartType[] | null>>;
  addToCart: (id: number, quantity: number, price: number) => void;
}

const AppContext = React.createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: appContextProviderProps) => {
  const [allItems, setAllItems] = useState(
    localStorage.getItem("items") ? JSON.parse(localStorage["items"]) : data
  );
  const [cart, setCart] = useState<cartType[] | null>(
    localStorage.getItem("cart") ? JSON.parse(localStorage["cart"]) : null
  );

  const addToCart = (id: number, quantity: number, price: number) => {
    let copyCart: cartType[] = [];
    cart?.forEach((item) => copyCart.push(item));
    copyCart.push({ id, quantity, price });
    setCart(copyCart);
  };

  const toggleFavorite = (id: number) => {
    const updatedArr = allItems.map((item: allItemsType) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setAllItems(updatedArr);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(allItems));
  }, [allItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        allItems,
        setAllItems,
        toggleFavorite,
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
