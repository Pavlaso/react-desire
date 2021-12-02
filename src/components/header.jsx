import logo from './../images/logo.png'
import iconMenu from './../images/icon_menu.svg'
import { RightSideMenu } from './rightSideMenu'
import { useState } from 'react'
import { Link } from "react-router-dom"
import cn from 'classnames'

export const Header = () => {
  const [actievLink, setActievLink] = useState('')
  const [activeMenu, setActiveMenu] = useState('')
  const [activeMenuAdaptive, setActiveMenuAdaptive] = useState(false)
  const openMenu = () => {setActiveMenu(true)}
  const closeMenu = () => {setActiveMenu(false)}
  return (
   <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <nav className={cn("menu",{menu_open: activeMenuAdaptive})}>
              <ul className="menu__list">
                <li className="menu__list-item" onClick={() => setActievLink('about')}>
                  <Link className={cn('menu__list-link', actievLink === 'about' && 'menu__list-link--active')} to="/about" >About</Link>
                </li>                
                <li className="menu__list-item" onClick={() => setActievLink('gallery')}>
                  <Link className={cn('menu__list-link', actievLink === 'gallery' && 'menu__list-link--active')} to="/gallery">Gallery</Link>
                </li>
              </ul>
            </nav>
            <a className="logo" href="#">
              <img src={logo} alt="logo" />
            </a>
            <nav className={cn("menu",{menu_open: activeMenuAdaptive})}>
              <ul className="menu__list">
                <li className="menu__list-item" onClick={() => setActievLink('blog')}>
                  <Link className={cn('menu__list-link', actievLink === 'blog' && 'menu__list-link--active')} to="/blog"> Blog</Link>
                </li>                
                <li className="menu__list-item" onClick={() => setActievLink('contact')}>
                  <Link className={cn('menu__list-link', actievLink === 'contact' && 'menu__list-link--active')} to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <button  onClick={() => setActiveMenuAdaptive(!activeMenuAdaptive)} className={cn('header__btn-menu')}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="header__btn" onClick={openMenu}>
              <img src={iconMenu} alt="icon menu" />
            </button>
            { activeMenu && <RightSideMenu closeMenu={closeMenu}/> }
          </div>
        </div>
    </header>
   </div>
  );
}
