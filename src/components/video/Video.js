import { useState } from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago';

import './VideoSection.css'

import { MdVerified } from "react-icons/md";


const Video = ({ video }) => {
  const { id, title, channel, duration, viewsCount, uploadedAt } = video

  const [error, setError] = useState(false);

  let image = (!error) ? video.thumbnail : 'https://picsum.photos/seed/picsum/250/150';

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
            src={image}
          />
        </a>
        <div className="video-details">
          <a href="#" className="video-title">{title}</a>
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