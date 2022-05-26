import React from 'react'
import Button from './Button';
import H2 from './H2';

function TopBar() {
  return (
    <div className="flex fixed w-screen bg-gray-500 py-2 z-50 justify-between px:6 sm:px-10">
      <H2>TechVihan</H2>
      <div className="flex space-x-4 text-black ml-8">
        <Button>Home</Button>
        <Button>Skills</Button>
        <Button>Projects</Button>
        <Button>Details</Button>
      </div>
    </div>
  );
}
export default TopBar





