import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago';
import { MdVerified } from "react-icons/md";

import './VideoSection.css'
import fallbackImg from './866-250x150.jpg'

const Video = ({ video }) => {
  const { id, title, channel, duration, viewsCount, uploadedAt } = video

  const [error, setError] = useState(false);

  let image = (!error) ? video.thumbnail : fallbackImg;

  const onImageError = () => {
    setError(true)
  }

  return (
    <article className="video-container">
      <Link to={`/video/${id}`} className="thumbnail" data-duration={duration}>
        <img
          className="thumbnail-image"
          src={image} onError={onImageError}
        />
      </Link>
      <div className="video-bottom-section">
        <a href="#">
          <img
            className="channel-icon"
            src={channel.icon}
          />
        </a>
        <div className="video-details">
          <Link to={`/video/${id}`} className="video-title">{title}
          </Link>
          <a href="#" className="video-channel-name">{channel.name} <MdVerified size={13} /></a>
          <div className="video-metadata">
            <span>{viewsCount}</span>
            <span>•</span>
            <span><TimeAgo date={uploadedAt} />
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Video