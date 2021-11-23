import React, { useState, useEffect } from "react";  
// Components 
import Card from "../components/card/card"; 
import Modal from "../components/modal/modal"; 

export default function LandingPage() { 
    const [data, setData] = useState(null); 
    const [isLoaded, setisLoaded] = useState(false); 
    const [isLoading, setIsLoading] = useState(false); 
    const [query, setQuery] = useState("1000");
    
    // Modal 
    const [modalShow, setModalShow] = useState(false); 
    const [modalItem, setModalItem] = useState(null); 

    useEffect(() => { 
        const fetchData = async (query) => { 
            setIsLoading(true); 
            try { 
                const response = await fetch( "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=ahDU969YAFkOS7KaM8kWockhnrI2VYmSGx2F5ITs", 
            );
                if (response.status === 200) { 
                    setData(response.data); 
                    console.log(data);
                    setisLoaded(true); 
                    setIsLoading(false);
                } 
            } catch (err) { 
                console.log(err); 
                setIsLoading(false);
            } 
        };
        if (!isLoaded) {
             fetchData(query); 
        } 
    }, [isLoaded, query]);

    const onSearch = (e) => { 
        if (e.key === "Enter") 
        { setisLoaded(false); 
            setQuery(e.target.value); 
        } 
    };

    const handleClick = (item) => { 
        setModalShow(!modalShow); 
        setModalItem(item); 
    };

    return (
        <main>
            <input type="text" placeholder="Search film by name" onKeyDown={(e) => onSearch(e)} />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? ( 
                <p>Loading...</p> 
            ) : ( 
                <div className="card-container" style={{display: "flex", flexWrap : "wrap"}}> 
                    {data.d.map((item, index) => {
                         return ( 
                            <Card data={item} key={index} onClick={() => handleClick(item)} /> 
                        ); 
                    })} 
                </div> 
            )}
            <Modal data={modalItem} isShow={modalShow} onCancel={() => setModalShow(false)} />
        </main>
    )
}