import React from 'react'
import { useState } from 'react'

import handleFavorite from '../../utils/handleFavorite'
import AudioModal from '../AudioComponent/AudioModal'
import Draggable from "react-draggable"


const EpisodeCard = ({items, image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentAudio, setCurrentAudio] = useState({ url: '', id: ''});

  const openModal = (audioUrl, audioId) => { 
    setCurrentAudio({ url: audioUrl, id: audioId }); 
  
  setIsModalOpen(true); };

  return (

    <div className="grid border border-gray-200 dark:border-gray-600 rounded-lg m-2">
         <div key={items.id} 
         className="p-4 bg-black font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black rounded-lg md:p-8 dark:bg-gray-800"
         >
            <div 
            className="grid grid-cols-2 gap-8 p-4 mx-auto "
            >

              <div>
                <h2 className="mt-2 text-xl font-bold text-purple-800">{items.title}</h2>
                <p className="mt-2 leading text-slate-500 text-gray-500">{items.description}</p>
              </div>

             <div className="p-4 mx-auto sm:p-8 ">
                <div className="text-gray-500 dark:text-gray-400 mb-2 text-3xl font-extrabold flex flex-col items-center justify-center hover:text-gray-400"> 
                <button onClick={() => openModal(items.file, items.title)}>
                Play Audio
                </button>
                <AudioModal 
                 isOpen={isModalOpen} 
                 onRequestClose={() => setIsModalOpen(false)} 
                 audioUrl={currentAudio.url} 
                 audioId={currentAudio.id}
                 episodeTitle={items.title}
                 img={image} /> 
                </div>
             </div>

            </div>
          </div>
    </div>
  )
}

export default EpisodeCard