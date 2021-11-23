import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
// import ApodDetail from './ApodDetail'

export default function Apod(props) {
  const [photoData, setPhotoData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { history } = props

  useEffect(() => {
    setLoading(true)
    async function fetchPhoto() {
      await axios
        .get(
          'https://api.nasa.gov/planetary/apod?api_key=ahDU969YAFkOS7KaM8kWockhnrI2VYmSGx2F5ITs',
          {
            params: { count: 15 },
          }
        )
        .then((res) => {
          return res.data
        })
        .then((data) => {
          console.log(data)
          setPhotoData(data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchPhoto()
  }, [])
  console.log(photoData)

  return (
    <div className="apod">
      <header className="header">
        <h1>APOD</h1>
      </header>
      {photoData !== null && (
        <div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="explore-content">
              {photoData === undefined
                ? 'Loading...'
                : photoData.map((apod, index) => {
                    return (
                      <div key={index}>
                        <NavLink
                          to={`/explore/${apod.title}/${apod.explanation}`}
                          onClick={() =>
                            history.push(
                              `/explore/${apod.title}/${apod.explanation}`
                            )
                          }
                        >
                          <img src={apod.url} alt={`${apod.title} pic`} />
                        </NavLink>
                        <p>{apod.title}</p>
                      </div>
                    )
                  })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
