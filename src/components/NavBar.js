import * as React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return(
    <nav className="NavBar">
        <Link to="/" activeClassName="active" className="NavLink">
          Index
        </Link>
        <Link to="/about" activeClassName="active"  className="NavLink">
          About
        </Link>
    </nav>
  )
};

export default NavBar;