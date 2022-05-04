import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import './SingleVideo.css';

export default function SingleVideo({ data }) {

  const { id } = useParams()
  const idx = Number(id);

  return (
    <section className="card">
      {data.filter(video => video.id === idx).map((video, index) => (
        <div key={index}>
          <ReactPlayer className='featured-video' width='100%' height='500px' controls url={video.src}></ReactPlayer>
          <article className="card-body">
            <header>
              <h1 className="pre-heading"><img className='channel-icon' src={video.channel.icon} alt={video.title} />
                {video.title}</h1>
              <p className='meta'>
                {video.viewsCount} • {video.uploadedAt}</p>
            </header>
          </article>
        </div>
      ))
      }
    </section>
  )
}