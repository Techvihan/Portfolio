import React from 'react'
import H2 from './H2';

function TopBar() {
  return (
    <div>
      <div className="flex justify-between px-2 py-2 sm:px-10 bg-gray-700">
        <H2>TechVihan</H2>
        <div className="flex space-x-4 text-white ">
          <a href="#home">Home</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#detail">Details</a>
        </div>
      </div>
    </div>
  );
}
export default TopBar





