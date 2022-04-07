import React from 'react'
import H1 from './H1';
function DetailBox (props){
  return(
    <div className="border-2 sm:w-96 w-full flex justify-center hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg">
    <div className='p-8 flex flex-col'>
    <div className="flex flex-row "><img className="w-16 h-16  object-cover absolute -mt-16 -ml-24 p-2" src={props.icon}/></div>
    <H1>{props.children}</H1>
    </div>
    </div>
  );
}
export default DetailBox
  