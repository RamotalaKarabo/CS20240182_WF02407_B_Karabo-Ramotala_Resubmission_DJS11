export const addToFavorites = (episode) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(episode);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};
