import React from 'react'

const CharacterItem = ({ item }) => {
  return (
      <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={ item.poster_path === "null" ? "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png" : ` https://image.tmdb.org/t/p/w1280${item.poster_path}`} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Review:</strong> {item.vote_average}
            </li>
            <li>
              <strong>Release date:</strong> {item.release_date}
            </li>
            <li>
              <strong>Language:</strong> {item.original_language}
            </li>
            <li>
              <strong>Overview:</strong> {item.overview.length > 150 ? item.overview.substr(0, 150) : item.overview}
            </li>
          </ul>
        </div>
      </div>
    </div>
  

  )
}

export default CharacterItem
