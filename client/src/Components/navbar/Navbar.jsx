import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className = 'navbar'>
            <div className='navContainer'>
                <span className='logo'>Publication</span>
                <div className='navItems'>
                    <button className='navButton' style={{backgroundColor: '#6F38C5', color: 'white'}}
                        onClick={()=>{navigate('/register')}}>Register</button>
                    <button className='navButton' style={{backgroundColor: '#6F38C5', color: 'white'}}
                        onClick={()=>{navigate('/login')}}>Login</button>
                    <button className='navButton' style={{backgroundColor: '#6F38C5', color: 'white'}}
                        onClick={()=>{navigate('/upload')}}>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
