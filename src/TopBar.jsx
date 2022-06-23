import React from 'react'
import H2 from './H2';

function TopBar() {
  return (
    <div>
      <div className="flex w-screen py-2 z-50 justify-between px:6 sm:px-10 bg-gray-700">
        <H2>TechVihan</H2>
        <div className="flex space-x-4 text-white ml-8">
          <a href="home">Home</a>
          <a href="skill">Skills</a>
          <a href="project">Projects</a>
          <a href="detail">Details</a>
        </div>
      </div>
    </div>
  );
}
export default TopBar





