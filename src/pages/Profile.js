import React from 'react'

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-content">
        <h1>About App</h1>
        <div>
          <p style={{ textAlign: 'justify' }}>
            This Nasa App was made for the PMDP final project. This App using{' '}
            <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">
              NASA Official API
            </a>{' '}
            to get the APOD data dan NEO data.
          </p>
        </div>
        <h2>Profile Author</h2>
        <img src="/foto-amez.jpg" alt="" />
        <div>
          <p>Nama: Amezry Azmi Hanif Shidqi </p>
          <p>NIM: 21120119130044</p>
        </div>
      </div>
    </div>
  )
}
