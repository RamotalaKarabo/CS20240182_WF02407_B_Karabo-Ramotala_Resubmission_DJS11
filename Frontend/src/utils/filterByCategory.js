let podcastData = ""
let filteredData = []

function filterPodByCategory(id){
//fetch all shows
  const fetchAllPodcasts = async () => {

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
};

fetchAllPodcasts();

console.log(podcastData);

for(let x of podcastData){
  let found = false;
  
 x.genres.forEach(element => {
  if(element == id){
    found = true;
  }else{
    found = false;
  }

  });

  if(found == true){
    
    filteredData.push(x)
  }
}

return filteredData;

}

export default filterPodByCategory;