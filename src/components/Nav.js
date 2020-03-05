import React, {useContext} from 'react'
import {MovieContext} from '../Context/MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className='navbar'>
            <h2>Maxime Jeannette</h2>
            <p>List of movies: {movies.length} </p>
        </div>
    )
}

export default Nav