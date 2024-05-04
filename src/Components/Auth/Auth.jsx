import React, { useContext, useState } from 'react'
const AuthContext = React.createContext()

export default function Auth() {
    const[user, SetUser] = useState(null)

    const login = (user) => {
        SetUser(user)
    }

    const logout = () => {
        SetUser(null)
    }

  return (
    <AuthContext.Provider value={{user,login,logout}}>
    {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth=() => {
    return useContext(AuthContext)
}