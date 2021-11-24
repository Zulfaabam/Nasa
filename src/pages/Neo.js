import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const START_DATE = '2021-09-07'
const END_DATE = '2021-09-07'
const API_KEY = 'ahDU969YAFkOS7KaM8kWockhnrI2VYmSGx2F5ITs'

export default function Neo(props) {
  const [neo, setNeo] = useState()
  const { history } = props

  useEffect(() => {
    async function fetchNeo() {
      await axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`
        )
        .then((res) => {
          return res.data
        })
        .then((data) => {
          console.log(data)
          setNeo(data.near_earth_objects)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchNeo()
  }, [])
  console.log(neo)

  const neoList = neo === undefined || null ? [] : neo[Object.keys(neo)[0]]

  return (
    <div className="neo">
      <header>
        <h1>Near Earth Objects</h1>
      </header>
      <h2>Date: {START_DATE}</h2>
      <div className="neo-content">
        {neoList.map((n) => {
          return (
            <NavLink
              to={`/neo/${n.id}`}
              onClick={() => history.push(`/neo/${n.id}`)}
              className="link"
              key={n.id}
            >
              <div className="neo-list">
                <h3>Asteroid:</h3>
                <p>{n.name}</p>
                {/* <p>
                Hazardous:{' '}
                {n.is_potentially_hazardous_asteroid === true ? 'Yes' : 'No'}
              </p> */}
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
