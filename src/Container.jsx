import React from 'react'
import Home from './Home';
import Icon from './Icon';
import MyDetails from './MyDetail';
import MyProject from './MyProject';
import MySkills from './MySkills';
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
      </div>
    </div>
  );
}
export default Container


