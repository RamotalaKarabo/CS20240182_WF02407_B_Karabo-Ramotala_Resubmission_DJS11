import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


import SeasonCard from '../components/Podcast_Components/SeasonCard';
import LoadingState from '../components/LoadingState/LoadingState';

const Podcast = () => {

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
  }, [params.showId]);

  if (error) {
    setLoading(false)
      return <div>Error: {error}</div>;
  }

  if(loading){
    return (
      <LoadingState />
    )
  
  }

  return (

    <div>
      {show.seasons?.map(podcast => (
        <SeasonCard 
        key={podcast.season} 
        items={podcast} 
        seasonId={podcast.season} 
        id={params.showId} />
        ))}
    </div>
  )
}

export default Podcast