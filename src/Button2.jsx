import React from 'react'

function Button2 (props){
  return(
    <div><a target="_blank" href={props.link}>
    <button className="hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500 px-8 py-4 text-4xl rounded-lg">{props.children}</button>
    </a></div>
  );
}
export default Button2
  