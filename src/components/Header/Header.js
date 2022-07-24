import React from 'react';
import {NavLink} from "react-router-dom";
import classes from '../Footer/Footer.module.css';

export default function Header() {
  return (
    <div>
      <ul className={classes.footerWrapper}>
      <li className={classes.footerLi}>
        <NavLink style={{textDecoration: 'none'}} to='/'>Дом</NavLink>
        </li>
        <li className={classes.footerLi}>
          <NavLink  style={{textDecoration: 'none'}} to='/about'>Контакты</NavLink>
          </li>
        <li className={classes.footerLi}>
          <NavLink style={{textDecoration: 'none'}} to="/profile">Настройки</NavLink>
          </li>
      </ul>
    </div>
  )
} 