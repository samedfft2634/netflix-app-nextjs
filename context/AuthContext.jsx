"use client";
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);
	const values = { currentUser };
	return (
		<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
