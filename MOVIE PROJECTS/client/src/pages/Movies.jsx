import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotesCard from '../components/NotesCard'

function Movies() {

  const [movie, setmovies] = useState([])

  const getAllMovie = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}/movies/get`, {
      withCredentials: true
    })
      .then((res) => {
        setmovies(res.data.movies)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getAllMovie()
  }, [])

    
  return (
    <>
        <h2>All Movies</h2>
        <div className="d-flex flex-column flex-md-row h-100 " style={{ minHeight: "100vh" }}>
        <div className="w-100 h-100 p-4">
          <h1>All Movies </h1>

          {movie.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
              {movie.map((el) => (
                <NotesCard
                  key={el._id}
                  title={el.title}
                  genre={el.genre}
                  director={el.director}
                  releaseYear={el.releaseYear}
                  description={el.description}
                  id={el._id}
                />
              ))}
            </div>
          ) : (
            <div className="p-4 d-flex flex-warp gap-4">
              <p className="text-xl">No Notes Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Movies