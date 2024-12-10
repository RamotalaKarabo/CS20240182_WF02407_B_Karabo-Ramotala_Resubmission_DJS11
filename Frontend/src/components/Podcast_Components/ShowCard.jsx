import React from 'react'
import { Link } from 'react-router-dom'
import ShowLinkButton from '../Buttons/ShowLinkButton'

const ShowCard = ({items}) => {
  return (
    <div>
         <div key={items.id} className="grid md:grid-cols-2 gap-4 grid-cols-1 border p-4 rounded  shadow-xl hover:shadow-2xl transition-all duration-300">

            <div className="">
            <h2 className="mt-2 mb-2 text-xl font-bold">{items.title}</h2>
                <img src={items.image} className="rounded size-[42vh] object-cover"/>
            </div>

            <div className="flex flex-col justify-center align-center flex-start">
             <p className="text-sm break-words">{items.description}</p>
             <h4 className="font-bold">Last updated: {items.updated.slice(0,10)}</h4>

             <Link to={`show/${items.id}/seasons`} >
             <ShowLinkButton item={items}/>
             </Link>
            </div>
          </div>

    </div>
  )
}

export default ShowCard