// import { render } from "@testing-library/react";
import { useContext } from "react"
import { Context } from "../../Context/Theme"

function Header(){

    const {theme, setTheme} = useContext(Context)
    return(
        <header className={`header ${theme}`}>
            <h1>React</h1>
            <select className="mode" value={theme} onChange={(evt)=>{setTheme(evt.target.value)}}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <ul className="list">
                <li className="listItem">Home</li>
                <li className="listItem">About</li>
                <li className="listItem">Contact</li>
            </ul>
        </header>
    )
}

export default Header