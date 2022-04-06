import { useState } from 'react'

import Categories from '../Layout/Categories'
import VideoSection from '../video/VideoSection'

import '../video/VideoSection.css'

export default function HomeContent({ data }) {
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