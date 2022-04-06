import { useParams } from 'react-router-dom'

import './SingleVideo.css';

export default function SingleVideo({ data }) {

  const { id } = useParams()
  const idx = Number(id);

  return (
    <section className="card">
      {data.filter(video => video.id === idx).map((video, index) => (
        <div key={index}>
          <img className='featured-image' src={video.thumbnail} alt={video.title} />
          <article className="card-body">
            <header>
              <h1 className="pre-heading"><img className='channel-icon' src={video.thumbnail} alt={video.title} />
                {video.title}</h1>
              <p className='meta'>
                {video.viewsCount} • {video.uploadedAt}</p>
            </header>
          </article>
        </div>
      ))}
    </section>
  )
}