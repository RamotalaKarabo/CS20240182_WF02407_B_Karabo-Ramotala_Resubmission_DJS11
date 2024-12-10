import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({categoriesList}) => {

  return (      
      <div 
    className="h-screen lg:h-[78vh] mt-4"
    >
      <div 
      className="px-4 lg:px-12 py-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >

        {categoriesList.map((items, i) => (
                <Link 
                key={i}
                to={`${items.to}`}
                className={`rounded-xl ${items.color} px-8 p-4 text-xl font-semibold hover:scale-105 shadow-xl relative `}
                >
                  <div>{items.name}</div>                  
             </Link>
        ))} 
        
      </div>
    </div>
  )
}

export default CategoryCard