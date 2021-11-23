import React from "react"; 
import "./card.css";

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? ( 
                <>
                    <figure> 
                        <img src={data.img_src} alt={data.name} /> 
                    </figure> 
                    <div className="card-info"> <h3>{data.name}</h3> 
                    </div> 
                </> 
            ) : 
            ( <p>Loading...</p> 
            )}
        </div>
    )
}