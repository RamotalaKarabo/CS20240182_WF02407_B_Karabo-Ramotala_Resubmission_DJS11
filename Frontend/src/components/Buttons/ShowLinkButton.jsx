import React from 'react'

const ShowLinkButton = ({item}) => {
  return (
    <div 
        className="my-2 group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent text-purple-900 hover:text-purple-500 h-auto w-[170px] overflow-hidden transition-all duration-100">
          <span className=" absolute left-0 h-full w-5 border-y border-l border-purple-500 transition-all duration-500"></span>

          <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Watch </p>

          <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">{item.title}</span>

          <span className=" absolute right-0 h-full w-5  border-y border-r  border-purple-500 transition-all duration-500"></span>
    </div>
  )
}

export default ShowLinkButton