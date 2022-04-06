import { useState } from 'react'
import { Link } from "react-router-dom";
import { HeaderMenu, HeaderLogo, HeaderInput, HeaderVoice } from "../Layout/HeaderMenu";

import './Header.css'


const Header = ({ searchUsers }) => {

  const [text, setValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault()
    searchUsers(text)
    setValue('')
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

  return (
    <header className="header py-1">
      {HeaderLogo.map((item, index) => {
        return (
          <Link to='/' key={index}>{item.icon}<img src={item.src} className={item.cName} /></Link>
        )
      })}
      <form onSubmit={onSubmitHandler} className="search-bar">
        <input
          className="search-input py-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={text}
          onChange={onChangeHandler}
        />
        <button type="submit" className="search-btn py-3">
          {HeaderInput.map((item, index) => {
            return (
              <a href="#" key={index}>{item.icon}</a>
            )
          })}
        </button>
        {HeaderVoice.map((item, index) => {
          return (
            <a href="#" key={index} className={item.cName}>{item.icon}</a>
          )
        })}
      </form>
      <div className="menu-icons">
        {HeaderMenu.map((item, index) => {
          return (
            <a href="#" key={index}>{item.icon}<img src={item.src} className={item.cName} /></a>
          )
        })}
      </div>
    </header>
  )
}

export default Header;