import React, { createContext, useState } from "react";
import { get, set } from "react-hook-form";
import { getLocalStorage } from "../utils/LocalStorage";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();
  const [userData, setUserData] = useState(null);
  setUserData(getLocalStorage());
  return (
    <div>
      <AuthContext.Provider value={"rayan"}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
