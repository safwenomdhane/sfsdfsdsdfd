import React from 'react'
import Rate from './rate'

const MovieCard=({currentmovie})=> {
    return (
        <div className='movie-card-container'>
            <div className='movieRating1'>
                <p className='stars1'><Rate count={currentmovie.rating}/></p>
            </div>
            <img src={currentmovie.imgsrc} alt='img' className='imgstyle'/>
            <div className='moviedescription'>
                <span>{currentmovie.name}</span>
                <span>-</span>
                <span>{currentmovie.year}</span>
            </div>

        </div>
    )
}

export default MovieCard; 