import React from 'react'
import Alink from './Alink';
import H1 from './H1';

function MyProject() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <H1>Projects</H1>
      </div>
      <div className="flex xl:flex-row space-y-10 md:space-y-0 flex-wrap justify-between border-4 border-double border-black rounded-md  shadow-md
     shadow-black mt-10 py-20 px-4 ">
        <div className='space-y-10'>
          <Alink link="https://bit.ly/3Mo6V10">Team Page</Alink>
          <Alink link="https://bit.ly/3zhOUi8">Dashboard</Alink>
          <Alink link="bit.ly/3ugFa4u">Cart App</Alink>
        </div>
        <div className='space-y-10'>
          <Alink link="https://assignment-33-create-a-todo-app-abhishekvihan.codeyogiteam.repl.co/">Todo App</Alink>
          <Alink link="https://assignment-34-create-ask-jud-clone-abhishekvihan.codeyogiteam.repl.co/">Ask Judo</Alink>
          <Alink link="https://dwoodwala.com/">D Wood Wala</Alink>
        </div>
        <div className='space-y-10 flex flex-col'>
          <Alink link="https://login-tvihan.netlify.app/">TechVihan Login</Alink>
          <Alink link="https://techvihan-hd-wallpaper.netlify.app/">TechVihan Wallpaper</Alink>
          <Alink link="https://responsive-page-techvihan.netlify.app/">Responsive Webpage</Alink>
        </div>
      </div>
    </div>
  );
}
export default MyProject
