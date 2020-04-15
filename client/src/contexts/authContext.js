import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userProfileState, setUserProfileState] = useState({});

  return(
    <AuthContext.Provider value={{
      userProfile: userProfileState
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;