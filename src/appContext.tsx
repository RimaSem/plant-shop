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
  cart: { id: number; quantity: number }[] | null;
  setCart: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          quantity: number;
        }[]
      | null
    >
  >;
  addToCart: (id: number, quantity: number) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

function AppContextProvider({ children }: appContextProviderProps) {
  const [allItems, setAllItems] = useState(
    localStorage.getItem("items") ? JSON.parse(localStorage["items"]) : data
  );

  // const [cart, setCart] = useState(allItems[0]);

  const [cart, setCart] = useState<{ id: number; quantity: number }[] | null>(
    null
  );

  function addToCart(id: number, quantity: number) {
    // let isAdded = cart?.some((item) => item.id === id);
    let copyCart: { id: number; quantity: number }[] = [];
    cart?.forEach((item) => copyCart.push(item));
    copyCart.push({ id, quantity });
    setCart(copyCart);

    // if (!isAdded) {
    //   setCart([...copyCart, { id, quantity }]);
    // } else {
    //   setCart(
    //     copyCart.map((item) => {
    //       if (item.id === id) {
    //         return { ...item, quantity: item.quantity + quantity };
    //       } else {
    //         return item;
    //       }
    //     })
    //   );
    // }
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
