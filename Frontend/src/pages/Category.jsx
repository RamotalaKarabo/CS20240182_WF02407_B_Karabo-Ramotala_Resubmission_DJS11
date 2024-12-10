import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ShowCard from '../components/Podcast_Components/ShowCard'
import CategoryDescriptionCard from '../components/Categories_Components/CategoryDescriptionCard'
import LoadingState from '../components/LoadingState/LoadingState'
import fetchCategories  from '../utils/fetchCategories'
import { fetchGenreShows } from '../utils/fetchAllPodcasts'
import filterPodByCategory from '../utils/filterByCategory'

import categories from '../utils/Categories'

// import filterByCategory from '../utils/filterByCategory'




const Category = () => {

  const params = useParams();
  const [genre, setGenre] = useState([]);
  const [error, setError] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filteredPodcasts, setFilteredPodcasts] = useState([])

  // use 'fetchCategories' functions to fetch genre data and set my states
  useEffect(() => {fetchCategories(params.genreId, setGenre,setPodcasts, setError)}, []);


  // useEffect(()=>{fetchGenreShows(setPodcasts,setLoading,params.genreId, setError)},[]);  
  // after fetching genre detail use 'filterByCategory' function to map shows matching its genre
  const podcastData = filterPodByCategory(params.genre);





  
  if (error){
    return <div>Error: {error}</div>
  }
  if(loading){
    return (
      <LoadingState />
    )
  
  }

  
  return (
    <>
    {/* Category description component*/}
    <div className="">
      <CategoryDescriptionCard  items={genre}/>
    </div>


    {/* Displaying of filtered podcasts matching the category */}
    <div key={params.genres} className="">
    {podcastData?.map((item, i) => 
    <ShowCard key={i} items={item}/>
    )}
    </div>
    </>

  )
}

export default Category