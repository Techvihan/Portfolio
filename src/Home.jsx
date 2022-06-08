import React from 'react'
import H1 from './H1';
import Photo from './Photo';
function Home() {
    return (
        <>
            <div className="flex flex-col mx-20 md:mx-24 sm:mx-20 absolute mt-20 sm:flex-row space-y-4 sm:space-x-4">
                <div className="mx-auto my-auto sm:mx-0"><Photo></Photo></div>
                <div className="flex flex-col space-y-2">
                    <H1>WELCOME TO MY WORLD</H1>
                    <span className="text-6xl md:text-4xl lg:text-6xl sm:text-6xl font-bold bg-clip-text bg-gradient-to-b from-indigo-500 to-pink-500 text-transparent p-2">Hi, I’m Abhishek Arya</span>
                    <span className="text-5xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-b from-indigo-500 to-pink-500 text-transparent p-2">Web Designer & Developer.</span>
                    <button className="bg-yellow-400 border-2 border-yellow-700 text-white font-bold p-2 rounded-md w-24 hover:bg-yellow-500"><a target="_blank" href="https://drive.google.com/file/d/1PUVRb1Sd4XEd2eAp3enL9PqRCuZOl3iC/view">Resume</a></button>

                </div>
            </div>
            <img className="w-full h-screen md:h-96 sm:h-96 shadow-md shadow-yellow-300" src="/background.jpg" />
        </>
    );
}
export default Home