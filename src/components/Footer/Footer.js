import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Footer.module.css';



function Footer() {

  return (
    <div className={classes.footer}>
      <ul className={classes.footerWrapper}>
      <li className={classes.footerLi}>
        <NavLink style={{textDecoration: 'none'}} to='/'>Главная</NavLink>
        </li>
        <li className={classes.footerLi}>
          <NavLink  style={{textDecoration: 'none'}} to='/about'>О нас</NavLink>
          </li>
        <li className={classes.footerLi}>
          <NavLink style={{textDecoration: 'none'}} to="/profile">Профиль</NavLink>
          </li>
      </ul>
    </div>
  );
}

export default Footer;