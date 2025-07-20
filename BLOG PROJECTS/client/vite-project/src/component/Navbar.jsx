import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NameContext } from "./context";

const Navbar = () => {
  const { state, setState } = useContext(NameContext);
  console.log(state)
  return (

    <div>
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links" >
          <li>
            <NavLink to="/" className="nav-item" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-item" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>





        {
          !state ?

            <ul className="nav-links">
              <li>
                <NavLink to="/signup" className="nav-item" activeClassName="active">
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-item" activeClassName="active">
                  Login
                </NavLink>
              </li>
            </ul> :

            <div>
              <li className="Username"   >
                {state}
              </li>
              <li style={{ margin: "0px 0px 0px 10px" }}><button onClick={() => setState(null)}>Logout</button></li>

            </div>

        }

      </nav>
    </div>
  );
};

export default Navbar;
