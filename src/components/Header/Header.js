import React from 'react';

import './header.css'

import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    
    function menuActive() {
        const menu = document.querySelector(".menu");
        const body = document.querySelector("body");
        menu.classList.toggle('active');
        body.classList.toggle('active')
    }

    const bodyWidth = document.querySelector("body");
    var width = bodyWidth.clientWidth;

    return (
       <header className="header">
           <h1 className="title">Daily Quote</h1>

            
            <MenuIcon className="btnMenu2" style={{fontSize: 50}} onClick={menuActive}/>

           <nav className="menu">
               <ul className="menuList">
                    <li className="menuItem">
                        <a className="button">Verify</a>
                    </li>
                    <li className="menuItem">
                        <a className="button">Graphics</a>
                    </li>
                    <li className="menuItem">
                        <a className="button">Learn</a>
                    </li>
                    <li className="menuItem">
                        <a className="button">About</a>
                    </li>
               </ul>
            </nav>
        
       </header>
    )
}

export default Header;