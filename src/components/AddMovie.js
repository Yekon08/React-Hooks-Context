import React, { useState, useContext } from 'react'
import {MovieContext} from '../Context/MovieContext'

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault()

        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: prevMovies.length+1}])
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie