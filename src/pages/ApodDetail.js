import React from 'react'
import { useParams } from 'react-router'

export default function ApodDetail() {
  const { apodImg, apodTitle, apodExplanation } = useParams()
  //   console.log(apodTitle, apodExplanation)

  return (
    <div>
      <h1>apod detail</h1>
      <img src={apodImg} alt="" />
      <p>{apodTitle}</p>
      <p>{apodExplanation}</p>
    </div>
  )
}
