import React from 'react'

function Button (props){
  return(
    <div>
    <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">{props.children}</button>
    </div>
  );
}
export default Button
  