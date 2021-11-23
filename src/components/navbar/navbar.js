import React from "react";
import {Link} from 'react-router-dom';
import "./navbar.css";


export default function navbar(){
    return(
        <div className="Navbar">
            <Link style={{ textDecoration: 'none' }} to="/Rover">
                <div className="button">
                    <p>
                        SEARCH
                    </p>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
                <div className="button">
                    <p>
                        APOD
                    </p>
                </div>
            </Link>
            <Link  style={{ textDecoration: 'none' }} to="/Profile">
                <div className="button">
                    <p>
                        PROFILE
                    </p>
                </div>
            </Link>
        </div>
    )
}