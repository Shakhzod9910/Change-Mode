import React, { Children } from 'react'

const Context = React.createContext()

function Provider({children}){
    const [theme, setTheme] = React.useState('light')

    return <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
}

export {Context , Provider}