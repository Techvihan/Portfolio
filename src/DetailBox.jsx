import React from 'react'
function DetailBox(props) {
  return (
    <div className="border-2 border-black sm:w-96 w-full flex justify-start hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 cursor-pointer 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg">
      <div className='flex flex-col sm:flex-row'>
        <div className="flex flex-row "><img className="w-16 h-16  object-cover p-2" src={props.icon} /></div>
        <h1 className='text-lg my-auto'>{props.children}</h1>
      </div>
    </div>
  );
}
export default DetailBox
