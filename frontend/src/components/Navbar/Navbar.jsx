import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

    const navigate = useNavigate()
    const [menu, setMenu] = useState("Home")
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <nav className='navbar'>
            <img
                className='navbar-logo'
                src={assets.logo}
                alt='logo'
                onClick={() => navigate("/")}
            />
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                    <a href='#'>Home</a>
                </li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
                    <a href='#explore-menu'>Menu</a>
                </li>
                <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>
                    <a href='#app-download'>Mobile-App</a>
                </li>
                <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>
                    <a href='#footer'>Contact Us</a>
                </li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='search icon' />
                <div className='navbar-search-icon'>
                    <img
                        src={assets.basket_icon} alt='basket icon'
                        onClick={() => navigate("/cart")}
                    />
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar