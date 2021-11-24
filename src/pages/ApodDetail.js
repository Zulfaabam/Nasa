import React from 'react'
import { useParams } from 'react-router'

export default function ApodDetail() {
  const { apodTitle, apodExplanation } = useParams()
  //   console.log(apodTitle, apodExplanation)

  return (
    <div className="apod">
      <header>
        <h1>APOD Explanation</h1>
      </header>
      <div className="apod-detail">
        <h2>{apodTitle}</h2>
        <p>
          <strong>Explanation:</strong>
        </p>
        <p>{apodExplanation}</p>
      </div>
    </div>
  )
}
