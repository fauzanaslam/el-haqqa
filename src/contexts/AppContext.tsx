import React, { useContext } from "react";
import * as apiClient from "../api-client";
import { useQuery } from "react-query";

type AppContext = {
  isLoggedIn: boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

// membuat component yang menyediakan konteks untuk semua file yang menerima properti choldren
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    // mendeklarasikan value apa saja yang bisa diakses di file lain untuk di modifikasi
    <AppContext.Provider
      value={{
        isLoggedIn: !isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
