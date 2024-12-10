import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowLinkButton from '../Buttons/ShowLinkButton';


const SeasonCard = ({items, seasonId, id}) => {

  const showID = {id};

  const {episodes} = items

  return (
    <div>
      <div key={items.season} className="px-4 lg:px-6 py-4 h-auto flex flex-col md:flex-row items-start justify-between gap-4 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="w-2/6 flex items-center justify-center md:justify-start md:items-start">
      <img src={items.image} className="rounded w-full h-[50vh] object-cover"/>
      </div>

      <div className="w-4/6 flex flex-col items-center align-center text-center justify-center">
      <h2 className="mt-16 text-2xl font-semibold">{items.title}</h2>
            
      <Link 
      to={`/${showID.id}/seasons/${seasonId}`}
      className="mt-12">
      <ShowLinkButton item={items}/>
      </Link>

            </div>
          </div>

    </div>
  )
}

export default SeasonCard