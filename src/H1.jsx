import React from 'react'

function H1(props) {

  return (
    <div>
      <span className="text-3xl text-black underline decoration-double  italic">{props.children}</span>
    </div>
  );
}
export default H1
