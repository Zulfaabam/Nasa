import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const API_KEY = 'ahDU969YAFkOS7KaM8kWockhnrI2VYmSGx2F5ITs'

export default function NeoDetail() {
  const [neo, setNeo] = useState()
  const { neoId } = useParams()
  useEffect(() => {
    async function fetchNeo() {
      await axios
        .get(`https://api.nasa.gov/neo/rest/v1/neo/${neoId}?api_key=${API_KEY}`)
        .then((res) => {
          return res.data
        })
        .then((data) => {
          console.log(data)
          setNeo(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchNeo()
  }, [neoId])
  console.log(neo)

  return (
    <div className="neo">
      <header>
        <h1>NEO Detail</h1>
      </header>
      <div className="neo-detail">
        <h2>NEO Asteroid</h2>
        <p>Name: {neo === undefined ? 'Loading...' : neo.name}</p>
        <p>
          Magnitude:{' '}
          {neo === undefined ? 'Loading...' : neo.absolute_magnitude_h}
        </p>
        <p>
          Estimated diameters:{' '}
          {neo === undefined
            ? 'Loading...'
            : neo.estimated_diameter.meters.estimated_diameter_min}{' '}
          Meter
        </p>
        <p>
          Hazardous:{' '}
          {neo === undefined
            ? 'Loading...'
            : neo.is_potentially_hazardous_asteroid === true
            ? 'Yes'
            : 'No'}
        </p>
      </div>
    </div>
  )
}
