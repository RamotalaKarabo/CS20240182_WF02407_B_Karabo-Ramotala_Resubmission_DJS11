
import categories from '../utils/Categories';

  export const fetchAllPodcasts = async (setPodcasts, setLoading, setError) => {
    try {
        const response = await fetch('https://podcast-api.netlify.app');
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setPodcasts(data);
        setLoading(false)
    } catch (error) {
        setError(error.message);
        setLoading(false)
    }
  };

 export const fetchGenreShows = async ( genreID) => {
  let podcastData = [{}];
  let filteredPodcasts = [{}]

    try {
      const response = await fetch('https://podcast-api.netlify.app/');
      if(!response.ok){
          throw new Error('Failed to fetch podcasts');
      }
      const data = await response.json();
      podcastData = data;
  } catch (error) {
      console.log(error.message);
  }

  for(let x of podcastData){
   x.genres.forEach(element => {
    console.log(element == genreID);
    if(element == genreID){
      try {
        const show = fetch(`https://podcast-api.netlify.app/id/${element}`);
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }
        const data =  show.json();
        filteredPodcasts.push(data);
    } catch (error) {
        console.log(error.message);
    }

    }
    });
  

  }
  console.log(filteredPodcasts);
  }


