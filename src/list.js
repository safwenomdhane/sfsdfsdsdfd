import React from 'react'
import MovieCard from './item'


const MovieList =({movielist})=> {
    return(
        movielist.map((el)=>
            <MovieCard key={el.id} currentmovie={el}/>
        )
        )
    
}


export default MovieList; 