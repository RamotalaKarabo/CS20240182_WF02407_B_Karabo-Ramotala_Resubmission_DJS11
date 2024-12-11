let podData = '';

function fetchPodcast(ID){

  const fetchEpisodes = async () => {
//fetch a show with identified id
    try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${ID}/`);
  
        if (!response.ok) {
            throw new Error('Failed to fetch episodes');
        }
        const data = await response.json();
        podData = data;  
    } catch (err) {
        console.log(err.message);
    }

    return podData;
  };
  
  fetchEpisodes();
}

export default fetchPodcast;
