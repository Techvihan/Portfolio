import React from 'react'
import Home from './Home';
import MyDetails from './MyDetail';
import MyProject from './MyProject';
import MySkills from './MySkills';
import TopBar from './TopBar';

function Container (){
  return(
    <div>
    <div className="bg-gradient-to-r from-black via-gray-500 to-white h-full py-8">
      <TopBar></TopBar>
      <Home></Home>
      <MySkills></MySkills>
      <MyProject></MyProject>
      <MyDetails></MyDetails>
      <div className="text-center mt-10 mx-auto w-32 sm:w-full sm:flex justify-center">
      <a href="https://codeyogi.io/" target="_blank" className="border-2 sm:w-96 w-full flex justify-center hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg">❤️ at CodeYogi</a>
      </div>
    </div>
    </div>
  );
}
export default Container


  