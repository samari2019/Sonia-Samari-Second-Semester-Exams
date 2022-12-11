import { NavLink } from "react-router-dom";
import "../App.css";

const Header = ()=>{
  return (
    <header>
        <nav>
          <ul className="list">
            <li>
             <NavLink className="navigate" to="/">
                Home
            </NavLink>
            </li>
            <li>
             <NavLink className="navigate" to="/useCounter">
               UseCounter
            </NavLink>
            </li>
            <li>
              <NavLink className="navigate" to="/useReducer">
                UseReducer
            </NavLink>
            </li>
            <li>
              <NavLink className="navigate" to="/errorboundary">
                ErrorBoundary
            </NavLink>
            </li>
            <NavLink className="navigate" to="/*">
              Error 404
            </NavLink>
            </ul>
            </nav>
            </header>
        );
    };
export default Header;