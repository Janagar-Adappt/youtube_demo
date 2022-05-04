import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

import Categories from '../Layout/Categories'
import { HeaderMenu, HeaderLogo, HeaderInput, HeaderVoice } from "../Layout/HeaderMenu";
import VideoSection from '../video/VideoSection'
import '../Layout/Header.css'

import '../video/VideoSection.css'


const Header = () => {

  return (
    <header className="header py-1">
      {HeaderLogo.map((item, index) => {
        return (
          <Link to='/' key={index}>{item.icon}<img src={item.src} className={item.cName} /></Link>
        )
      })}
      <form className="search-bar">
        <input
          className="search-input py-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
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

const HomeContent = ({ data }) => {
  const allCategories = ['All', ...new Set(data.map((item) => item.title))]

  const [videos, setVideos] = useState(data)
  const categories = allCategories;

  const filterItems = (title) => {
    if (title === 'All') {
      setVideos(data);
      return;
    }
    const newItems = data.filter((item) => item.title === title)
    setVideos(newItems)
  }

  return (
    <>
      <Categories categories={categories} filterItems={filterItems} />
      <VideoSection
        videos={videos}
      />
    </>
  )
}

export { Header, HomeContent }