import React from 'react'

function Alink(props) {
  return (
    <div className="rounded-lg">
      <a target="_blank" href={props.link} className="border-2 font-bold border-yellow-700 py-2 px-1 text-3xl text-white bg-yellow-500 hover:bg-green-500 rounded-lg">{props.children}</a>
    </div>
  );
}
export default Alink
