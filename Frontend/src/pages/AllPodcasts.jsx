import React from 'react';
import { useState, useEffect } from "react";


import ShowCard from '../components/Podcast_Components/ShowCard';
import {fetchAllPodcasts} from '../utils/fetchAllPodcasts';
import {filterPodcasts} from '../utils/filterPodcasts';
import LoadingState from '../components/LoadingState/LoadingState';
import categories from '../utils/Categories';

const AllPodcasts = () => {

  //apllications's states declaration to maintain states
   const [podcasts, setPodcasts] = useState([]); 
   const [searchTerm, setSearchTerm] = useState(''); 
   const [genre, setGenre] = useState('all');
   const [loading, setLoading] = useState(true);
   const [filteredPodcasts, setFilteredPodcasts] = useState([]);
   const [sortOrder, setSortOrder] = useState('asc'); 
   const [error, setError] = useState(null);
  
   //set podcast, load, error states
   useEffect(() => { 
    fetchAllPodcasts(setPodcasts,setLoading, setError)}, []);

   //Fetch show  data from an endpoint using the utility function and filter accordingly
   useEffect(() => { 
    filterPodcasts(podcasts, searchTerm, genre, sortOrder, setFilteredPodcasts)}, 
    [searchTerm, genre, sortOrder, podcasts]
); 

//display error occured
if (error){
    setLoading(false)
    return <div>Error: {error}</div>
}

if(loading){
  return (
    //Display a loading state while data is being fetched
    <LoadingState />
  )

}


  return (
    <div >

      <nav className="flex justify-between m-4"> 

        <div className=" mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 flex-start" >
          <input className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
          type="text" 
          placeholder="Search podcasts..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          //sets the search term on change and fetch the searched podcast
          /> 
        </div>

      <select 
        value={genre} 
        onChange={e => setGenre(e.target.value)
        }
        className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent">
          <option value="all">All Genres</option> 
          {categories.map((genre) => (
            <option value={genre.categoryID}>{genre.name}</option>
          ))} 
      </select> 

      <select 
        value={sortOrder} 
        onChange={e => setSortOrder(e.target.value) || setGenre(genre)
        }
        className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent"> 
        <option value="asc">A-Z</option> 
        <option value="desc">Z-A</option> 
      </select> 
      </nav>

        <div className="flex flex-col judtify-center align-center items-center">
            <h1>{filteredPodcasts.length+1} Podcasts/Shows</h1>
            <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 gap-8">
                {filteredPodcasts.map(show => (
                    <ShowCard key={show.id} items={show}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllPodcasts