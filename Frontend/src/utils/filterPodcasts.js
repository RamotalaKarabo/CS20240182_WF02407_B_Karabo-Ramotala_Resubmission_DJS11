
// Filter podcasts by cateories and arrangement
export  function filterPodcasts(podcasts, searchTerm, genre,sortOrder, setFilteredPodcasts){

  let filtered = podcasts;
//returns the searched podcasts
  if (searchTerm) { 
    filtered = filtered.filter(podcast => 
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
     ); 
    } 
//filters podcasts according to genre selected
  if (genre !== 'all') { 
      
      filtered = filtered.filter(podcast => {
        podcast.genre == genre
      } 
   
      ); 
//filters podcast to display from either ascending order or descending-order  
      } if (sortOrder === 'asc') { 
        filtered.sort((a, b) => a.title.localeCompare(b.title));
       } else { filtered.sort((a, b) => 
        b.title.localeCompare(a.title)); 
      } 

      setFilteredPodcasts(filtered); 

}

