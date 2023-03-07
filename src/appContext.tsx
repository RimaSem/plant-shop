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
};

const AppContext = React.createContext<AppContextType | null>(null);

function AppContextProvider({ children }: appContextProviderProps) {
  const [allItems, setAllItems] = useState(
    localStorage.getItem("items") ? JSON.parse(localStorage["items"]) : data
  );

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
