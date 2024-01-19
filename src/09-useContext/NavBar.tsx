import { Link, NavLink } from "react-router-dom"

export const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            to="/" 
                            className={ ({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}>
                            Home
                        </NavLink>
                        <NavLink 
                            to="about" 
                            className={ ({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}>
                            About
                        </NavLink>
                        <NavLink 
                            to="login" 
                            className={ ({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}>
                            Login
                        </NavLink>
                        {/* <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}