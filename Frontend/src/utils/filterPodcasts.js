// Filter podcasts by cateories and arrangement
export  function filterPodcasts(podcasts, searchTerm, genre,sortOrder, setFilteredPodcasts){

  let filtered = podcasts;

  if (searchTerm) { 
    filtered = filtered.filter(podcast => 
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
     ); 
    } if (genre !== 'all') { 
      filtered = filtered.filter(podcast => 
        podcast.genre === genre); 
        
      } if (sortOrder === 'asc') { 
        filtered.sort((a, b) => a.title.localeCompare(b.title));
       } else { filtered.sort((a, b) => 
        b.title.localeCompare(a.title)); 
      } 

      setFilteredPodcasts(filtered); 

}

