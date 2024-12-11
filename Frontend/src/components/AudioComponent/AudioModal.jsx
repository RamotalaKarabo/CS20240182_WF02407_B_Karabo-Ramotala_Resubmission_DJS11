import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { addToFavorites } from '../../utils/addToFavorites';


Modal.setAppElement('#root');  // Important for accessibility

const AudioModal = ({ isOpen, onRequestClose, audioUrl, audioId, episodeTitle, img }) => {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const params = useParams()

    console.log(params);

    useEffect(() => {
        if(isOpen){
            const savedTime = localStorage.getItem(audioId);
        if (savedTime) {
            setCurrentTime(parseFloat(savedTime));
        }
    }
    }, [isOpen, audioId]);

    useEffect(() => {
        if (audioRef.current && currentTime > 0) {
            audioRef.current.currentTime = currentTime;
        }
    }, [currentTime]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        localStorage.setItem(audioId, audioRef.current.currentTime);
    };

    const handleAddToFavorites = (episode) => { 
        addToFavorites(episode); 
        alert('Episode added to favorites!'); 
    };

    const handleMinimize = () => {
        onRequestClose();
    };

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        className="fixed flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md z-50" 
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-40">

            <button 
              onClick={handleMinimize}
              className="m-2 p-2 px-4 text-2xl cursor-pointer font-extrabold hover:opacity-50">
              <FontAwesomeIcon icon={faWindowMinimize} />
            </button>

            <div className="flex flex-col items-center">
                <h2>Now Playing - {episodeTitle} </h2>
                <img 
                src={img}
                className="w-2/6 m-4"/>
                <audio
                    ref={audioRef}
                    src={audioUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onPlay={() => {
                        setIsPlaying(true)
                    }}
                    onPause={() => setIsPlaying(false)}
                    controls
                />
                <div className="flex">
                <button 
                onClick={handlePlayPause}
                className="m-2 p-2 px-4 text-lg cursor-pointer">
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button 
                onClick={() => {
                    setIsFavorite(!isFavorite);
                    handleAddToFavorites({ audioUrl, audioId, episodeTitle, img })        
                }}

                className="flex justify-end align-center items-center">
                    {isFavorite ? <FontAwesomeIcon icon={faStar} /> : `+ Add To Favorites`}
                </button>
                </div>
            </div>
        </Modal>
    );
};

export default AudioModal;
