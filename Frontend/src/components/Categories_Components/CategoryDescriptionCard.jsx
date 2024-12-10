import React from 'react'

const CategoryDescriptionCard = ({items}) => {

  return (
    <div>
      <div className={`mb-36 flex align-center justify-content bg-purple-300`}>
      <div className="rounded-xl ${items.color} px-8 p-4 shadow-lg relative text-center align-center ">
        <header className="mb-4 font-bold text-purple-900">{items.title}</header>
        <p className="text-gray-600">{items.description}</p>
      </div>
        <div></div>
    </div>
    </div>
  )
}

export default CategoryDescriptionCard 