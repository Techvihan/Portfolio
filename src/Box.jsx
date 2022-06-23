import React from 'react'

function Box(props) {
  return (
    <div className="flex flex-col space-y-8 sm:space-y-0 mt-10 sm:flex-row border-4 border-double border-black rounded-md  shadow-md
     shadow-black mx-4 my-4 py-16 px-10 items-center sm:justify-between">
      {props.children}
    </div>
  );
}
export default Box


