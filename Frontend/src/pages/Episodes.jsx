import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import EpisodeCard from '../components/Podcast_Components/EpisodeCard';
import LoadingState from '../components/LoadingState/LoadingState';




const Episodes = () => {
  const params = useParams();
  const [show, setShow] = useState([{}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchEpisodes = async () => {
          try {
              const response = await fetch(`https://podcast-api.netlify.app/id/${params.showId}`);

              if (!response.ok) {
                  throw new Error('Failed to fetch episodes');
              }
              const data = await response.json();
              setShow(data);
              setLoading(false)

          } catch (err) {
              setError(err.message);
          }
      };

      fetchEpisodes();
  }, []);

  if (error) {
    setLoading(false)
      return <div>Error: {error}</div>;
  }

  if(loading){
    return (
      <LoadingState />
    )
  
  }
  console.log(show.seasons);

  return (
    <div>

      {show.seasons?.map((item, i) => (
        <div>
          {item.season == params.seasonId ? 
          (<div key={i} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-8 my-6"> 
            {item.episodes?.map((ep) => (
            <EpisodeCard
            items = {ep}
            image={item.image} 
            /> 
          ))} 
          </div>)
          : ""}
        </div>
      ))}

    </div>
  )
}

export default Episodes