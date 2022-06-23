import React from 'react'
import Home from './Home';
import Icon from './Icon';
import MyDetails from './MyDetail';
import MyProject from './MyProject';
import MySkills from './MySkills';
// import TopBar from './TopBar';
import H2 from './H2';
import TopBar from './TopBar';

function Container() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="h-full">
        <div id="home">
          <Home></Home></div>
        <div id="skill">
          <MySkills></MySkills></div>
        <div id="project">
          <MyProject></MyProject></div>
        <div id="detail">
          <MyDetails></MyDetails>
        </div>
        <div className="text-center mt-10 mx-auto w-full flex flex-row space-x-5 sm:w-full  justify-center">
          <Icon address="https://twitter.com/home" icon="https://img.icons8.com/fluency/344/twitter.png"></Icon>
          <Icon address="https://www.instagram.com/username_vihan/" icon="https://img.icons8.com/fluency/344/instagram-new.png"></Icon>
          <Icon address="https://github.com/Techvihan" icon="https://img.icons8.com/ios-filled/344/github.png"></Icon>
          <Icon address="https://www.linkedin.com/feed/" icon="https://img.icons8.com/color/344/linkedin-circled--v1.png"></Icon>
        </div>

        <div className="text-center mt-10 mx-auto w-32  sm:w-full sm:flex justify-center">
          <a href="https://codeyogi.io/" target="_blank" className="border-2 sm:w-96 w-full flex justify-center hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg">❤️ at CodeYogi</a></div>

      </div>
    </div>
  );
}
export default Container


