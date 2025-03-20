import React, { createContext, use, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { AllEmployees } from "../utils/localStorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees } = getLocalStorage();

    if (!employees) {
      setLocalStorage(AllEmployees);
      setUserData(AllEmployees);
    } else {
      setUserData(employees);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setLocalStorage(userData);
    }
  }, [userData]);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
