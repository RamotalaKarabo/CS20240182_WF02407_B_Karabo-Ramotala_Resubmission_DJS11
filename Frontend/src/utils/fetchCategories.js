import { data } from "react-router-dom";

// fetch genres from an API endpoint

function fetchCategories(ID, setGenre,setPodcasts, setError){
    
  const fetchCategory = async () => {
    try {
        const response = await fetch(`https://podcast-api.netlify.app/genre/${ID}`);
        
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }

        const data = await response.json();
        setGenre(data);
        setPodcasts(data.shows);
    } catch (error) {
        setError(error.message); 
    }
};

fetchCategory(ID)
}

export default fetchCategories;








