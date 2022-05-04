import React from 'react'
import './VideoSection.css'
import Video from "./Video"
import Sidebar from '../Layout/Sidebar'

const VideoSection = ({ videos }) => {
  return (
    <>
      <Sidebar />
      <div className='videos'>
        <section className="video-section">
          {videos.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </section>
      </div>
    </>
  )
}

export default VideoSection