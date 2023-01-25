import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();


export const ContextProvider = ({children}) =>{
    const [popupPasienLama, setPopupPasienLama] = useState(false)
  const [popupPasienBaru, setPopupPasienBaru] = useState(false)
   
   return(
      <StateContext.Provider value={
        {
        popupPasienLama,
        setPopupPasienLama,
        popupPasienBaru,
        setPopupPasienBaru
         
         }}>
         {children}
      </StateContext.Provider>
   )
}

export const useStateContext = () =>useContext(StateContext)