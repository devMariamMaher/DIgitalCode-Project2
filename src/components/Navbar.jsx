import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <nav>
        <div className="logo">
            <img src="/images/logo.png" alt="" />
        </div>

        <div className={`navTabs ${menuOpen ? 'menuOpen' : ''}`}>
            <ul className="navLinks">
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="">الرئيسية</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="">السيارات</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="">العروض</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/قطاع-الأعمال">قطاع الأعمال</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/عن-الشركة">عن الشركة</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/الفروع">الفروع</NavLink></li>
            </ul>

            <div className="navIcons">
                <div className="menuIcon">
                    <label htmlFor="menu">{menuOpen ? <IoMdClose/> : <IoMdMenu/>}</label>
                    <input type="checkbox" id="menu" onChange={handleMenuToggle} />
                </div>
            </div>
        </div>

    </nav>
  )
}
