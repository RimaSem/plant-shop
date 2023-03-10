import React, { useState, useEffect } from "react";
import data from "./data";

type appContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  allItems: {
    id: number;
    name: string;
    price: number;
    img: string;
    description: string;
    isFavorite: boolean;
    forBeginners: boolean;
    isPetSafe: boolean;
  }[];

  setAllItems: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        price: number;
        img: string;
        description: string;
        isFavorite: boolean;
        forBeginners: boolean;
        isPetSafe: boolean;
      }[]
    >
  >;
  toggleFavorite: (id: number) => void;
  cart: { id: number; quantity: number; price: number }[] | null;
  setCart: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          quantity: number;
          price: number;
        }[]
      | null
    >
  >;
  addToCart: (id: number, quantity: number, price: number) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

function AppContextProvider({ children }: appContextProviderProps) {
  const [allItems, setAllItems] = useState(
    localStorage.getItem("items") ? JSON.parse(localStorage["items"]) : data
  );
  const [cart, setCart] = useState<
    { id: number; quantity: number; price: number }[] | null
  >(null);

  function addToCart(id: number, quantity: number, price: number) {
    let copyCart: { id: number; quantity: number; price: number }[] = [];
    cart?.forEach((item) => copyCart.push(item));
    copyCart.push({ id, quantity, price });
    setCart(copyCart);
  }

  function toggleFavorite(id: number) {
    const updatedArr = allItems.map((item: any) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });

    setAllItems(updatedArr);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(allItems));
  }, [allItems]);

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
}

export { AppContextProvider, AppContext };
