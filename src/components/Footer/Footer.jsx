import { Context } from "../../Context/Theme"
import React from "react"

function Footer(){
    const {theme} = React.useContext(Context)
    return(
        <footer className={`footer ${theme}`}>
            <span>@shakhzodbek</span>
        </footer>
    )
}

export default Footer