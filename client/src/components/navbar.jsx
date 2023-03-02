import React, {useContext} from "react";
import {NavLink } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const history = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
        <a href="/" className="brand-logo">Главная</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to='/users'>Пользователи</NavLink></li>
          {/*<li><NavLink to='/create'>Создать</NavLink></li>*/}
          {/*<li><NavLink to='/links'>Ссылки</NavLink></li>*/}
          <li><a href='/' onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}