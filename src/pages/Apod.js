import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../App.css";



export default function Apod(){
    const [photoData, setPhotoData] = useState(null);
    const [count, setCount] = useState(0);
    
    const nextSlide = () => {
        setCount(count === 5 - 1 ? 0 : count + 1);
    };
    const prevSlide = () => {
        setCount(count === 0 ? 5 - 1 : count - 1);
      };


    useEffect(()=>{
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                 'https://api.nasa.gov/planetary/apod?count=5&api_key=ahDU969YAFkOS7KaM8kWockhnrI2VYmSGx2F5ITs'
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
            }    
        }, 
        []
        );
      return(
        <div>
            {photoData === null && (
                <div className="loading">
                    ...loading
                </div>
            )}
            {photoData !== null && (
                <div className='slider' style={{position : "relative"}}>
                    <div className='header'>
                        <h1>APOD</h1>    
                    </div>
                    <div style={{margin: "auto"}}>  
                        <div className='content'>  
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                            <img  src={photoData[count].url} alt={photoData[count].title}/>
                            <div>
                                <h1>{photoData[count].title}</h1>
                            </div>
                        </div>
                        <div className="seemore">
                        <Link to = "/Apod/details" className="seemore" data={photoData[count]}>
                            See More    
                        </Link>  
                        </div>
                    </div>
                </div>
            )}
        </div>
      )
}