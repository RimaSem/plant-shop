import React, { useState } from "react";
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
};

const AppContext = React.createContext<AppContextType | null>(null);

function AppContextProvider({ children }: appContextProviderProps) {
  const [allItems, setAllItems] = useState(data);

  return (
    <AppContext.Provider
      value={{
        allItems,
        setAllItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
