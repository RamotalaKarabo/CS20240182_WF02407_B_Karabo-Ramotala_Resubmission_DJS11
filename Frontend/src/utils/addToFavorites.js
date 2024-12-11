export const addToFavorites = (episode) => {
  //sets the localStorage to store favorite episodes
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(episode);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  //gets favorites from the localStorage 
  return JSON.parse(localStorage.getItem('favorites')) || [];
};
