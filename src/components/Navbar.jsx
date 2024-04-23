import { useState } from 'react';
import logo from '../assets/agri.jpeg';
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

function Navbar(){

    return (
        <div className='navbar-container'>
            <div className="nav">
                <div className="logo-container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h1>Fit Farm</h1>
                        </div>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/predict">Predict</Link>
                    <Link to="/blogs">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className='nav-auth'>
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className='reg'>
                            Sign Up
                        </button>
                    </Link>
                </div>

                <div className="menu-btn">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Navbar;