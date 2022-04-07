import React from 'react'
import Button from './Button';
import H2 from './H2';

function TopBar (){
  return(
    <div className="flex justify-between px-10 pb-4">
    <H2>TechVihan</H2>
    <div className="flex space-x-4 text-black">
    <Button>Home</Button>
    <Button>About</Button>
    <Button>Work</Button>
    <Button>Contact</Button>
    </div>
    </div>
  );
}
export default TopBar





