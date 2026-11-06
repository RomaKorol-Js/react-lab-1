import { useState } from 'react'
import './ProfileCard.css'

function ProfileCard({ name, group, technologies }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="profile-card">
      <p className="profile-card__eyebrow">Знайомство</p>
      <h1>Про мене</h1>
      <dl className="profile-card__details">
        <div>
          <dt>Ім’я</dt>
          <dd>{name}</dd>
        </div>
        <div>
          <dt>Група</dt>
          <dd>{group}</dd>
        </div>
      </dl>
      <section className="profile-card__technologies">
        <h2>Технології, які хочу опанувати</h2>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
      <button
        className="profile-card__like"
        type="button"
        onClick={() => setLikes((currentLikes) => currentLikes + 1)}
      >
        <span>Подобається</span>
        <span className="profile-card__count" aria-live="polite">
          {likes}
        </span>
      </button>
    </article>
  )
}

export default ProfileCard
