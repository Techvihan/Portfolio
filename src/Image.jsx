import React from 'react'
import H2 from './H2';

function Image (props){
  return(
      <a target="_blank"  href={props.link}>
    <div className='border-2 hover:border-4 hover:border-double border-lime-500 rounded-full h-52 w-52 md:h-32 md:w-32 lg:h-48 lg:w-48 sm:h-32 sm:w-32 p-2 bg-black shadow-lg shadow-lime-700'>
    <img className="h-36 w-36 md:h-24 md-w-24 lg:h-32 lg:w-32 animate-bounce sm:h-36 sm:w-36" src={props.icon}/>
    <div className="items-center flex justify-center">
    <H2>{props.children}</H2>
    </div>
    </div></a>
  );
}
export default Image
  