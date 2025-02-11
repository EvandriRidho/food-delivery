import React from 'react';
import './Sidebar.css';
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebar-options'>
                    <NavLink
                        to="/add"
                        className={({ isActive }) =>
                            isActive ? 'sidebar-option active' : 'sidebar-option'
                        }
                    >
                        <img
                            src={assets.add_icon}
                            alt='add-icon'
                        />
                        <p>Add Items</p>
                    </NavLink>
                    <NavLink
                        to="/list"
                        className={({ isActive }) =>
                            isActive ? 'sidebar-option active' : 'sidebar-option'
                        }
                    >
                        <img
                            src={assets.order_icon}
                            alt='list-icon'
                        />
                        <p>List Items</p>
                    </NavLink>
                    <NavLink
                        to="/orders"
                        className={({ isActive }) =>
                            isActive ? 'sidebar-option active' : 'sidebar-option'
                        }
                    >
                        <img
                            src={assets.order_icon}
                            alt='orders-icon'
                        />
                        <p>Orders</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
