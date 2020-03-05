import React, { useState, useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from '../Context/MovieContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)
    console.log('test: ', [movies, setMovies])

    return (
        <>
            {movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price} id={movie.id}/>
            ))}
        </>
    )
}

export default MovieList