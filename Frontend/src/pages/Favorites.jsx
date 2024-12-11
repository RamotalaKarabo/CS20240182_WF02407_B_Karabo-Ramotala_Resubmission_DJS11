import React, { useState, useEffect } from 'react';
import { getFavorites } from '../utils/addToFavorites'; 
import AudioModal from '../components/AudioComponent/AudioModal';

const Favorites = () => {
  //declare my state variables and initialize some variables
    const [favorites, setFavorites] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentAudio, setCurrentAudio] = useState({ url: '', id: ''});
  
    const openModal = (audioUrl, audioId) => { 
      setCurrentAudio({ url: audioUrl, id: audioId }); 
    
    setIsModalOpen(true); };

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    return (
        <div>
            <h1 className="flex align-center justify-center">Your Favorite Episodes</h1>
            <div>
                {favorites.map(({ audioId, episodeTitle, img, audioUrl }) => (

                    <div key={audioId} className="card">
                      <div className="grid border border-gray-200 dark:border-gray-600 rounded-lg m-2 w-2/6">
                        <div className="p-4 bg-black font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black rounded-lg md:p-8 dark:bg-gray-800">
                          <div className="grid grid-cols-2 gap-8 p-4 mx-auto ">
                            <div>
                              <h2 className="mt-2 text-xl font-bold text-purple-800">{episodeTitle}
                              </h2>
                            </div>
                            <div className="p-4 mx-auto sm:p-8 ">
                              <div className="text-gray-500 dark:text-gray-400 mb-2 text-3xl font-extrabold flex flex-col items-center justify-center hover:text-gray-400"> 
                                <button onClick={() => openModal(audioUrl, audioId)}>Play Audio</button>
                                <AudioModal 
                                isOpen={isModalOpen} 
                                onRequestClose={() => setIsModalOpen(false)} 
                                audioUrl={currentAudio.url} 
                                audioId={currentAudio.id}
                                episodeTitle={episodeTitle}
                                img={img} /> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
