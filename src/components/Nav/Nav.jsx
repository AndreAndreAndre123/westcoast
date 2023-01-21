import { Link } from "react-router-dom";
import "./nav.css"


const Nav = () => {

    return(
        <>
            <ul className="navigation">
                <li><Link to={"/"}>Hem</Link></li>
                <li><Link to={"/teachers"}>Lärare</Link></li>
                <li><Link to={"/courses"}>Kurser</Link></li>
            </ul>
        </>
    )
}

export default Nav;