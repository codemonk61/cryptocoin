import React from 'react'
import {IoMdSettings} from 'react-icons/io'
import {FaSearch,FaBars} from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>

        {/* 1 menu column */}

        <div className='nav-links'>
            <ul>
                <li>
                    <a href="#">Coins</a>
                </li>
                <li>
                    <a href="#">Exchanges</a>
                </li>
                <li>
                    <a href="#">Swap</a>
                </li>
            </ul>
            <div className='search-icon'>
            <a href="#">
                <FaSearch/>
                </a>
            </div>
        </div>

        {/* 2 menu column */}

        <div className='logo'>
            <img src='https://logovtor.com/wp-content/uploads/2019/10/coincap-io-logo-vector.png' alt="logo"/>
            
        </div>

        {/* 3 menu column */}

        <div className='search'>
            <ul>
                <li>
                <a href="#">
                <FaSearch/>
                </a>
                </li>
                <li>
                   <a href="#">
                   <IoMdSettings/>
                   </a>
                </li>
                <li>
                    <a href='#' className='btn-primary'>Connect Wallet</a>
                </li>

            </ul>
            <div className='bar'>
             <a href='#'>
             <FaBars/>
             </a>
            </div>
        </div>


    </nav>
    </>
  )
}

export default Navbar