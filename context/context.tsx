import React, { useState, useEffect } from "react";
import { GetUserData } from "@/actions/get-user-data";

import { createContext } from "react";

interface MyContextValue {
  selectedLanguage: string | null;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string | null>>;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the language from the database and set it in the state
    GetUserData()
      .then((res) => {
        console.log(res);
        setSelectedLanguage("hindi");
      })
      .catch((error) => {
        console.error("Error fetching language:", error);
      });
  }, []);

  const contextValue: MyContextValue = {
    selectedLanguage,
    setSelectedLanguage,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
