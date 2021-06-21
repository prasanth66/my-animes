
import React from 'react';

import './animeDetailsPage.css';
import { useLocation } from 'react-router-dom';



function AnimeDetailsPage(props){
   
    const location = useLocation()
  const { anime } = location.state
  console.log(anime)
   
    return(
       <div>
           <div className="anime_details_wrapper">
                <div className="details_image">
                <img src={anime.image_url} alt="GeeksforGeeks logo" />  
        
                </div>
                <div className="details">
                    <h1>
                    {anime.title} 
                    </h1>
                    <div style={{color:"gold"}}>
                        <span>Rating {anime.score}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <span>Members {anime.members}</span>
                    </div>
                    <div className="details">
                        <h2>Synopsis</h2>
                        <p>{anime.synopsis}</p>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default AnimeDetailsPage ;