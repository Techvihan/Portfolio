import React from 'react'
import Photo from './Photo';
function Home() {
    return (
        <div>
            <div className="flex flex-col mx-16 md:mx-5 lg:mx-24 sm:mx-20 sm:mt-16 absolute top-10 sm:flex-row space-y-4 md:space-x-4 lg:space-x-20 ">
                <div className="mt-6 sm:-mt-4"><Photo></Photo></div>
                <div className="flex flex-col space-y-2 pt-20 md:pt-12">
                    <span className="text-xl font-bold px:12 sm:px-12 sm:text-3xl">WELCOME TO MY WORLD</span>
                    <span className="text-6xl md:text-4xl lg:text-6xl sm:text-6xl font-bold bg-clip-text bg-gradient-to-b from-stone-700 to-gray-500 text-transparent p-2">Hi, I’m Abhishek Arya</span>
                    <span className="text-5xl md:text-3xl font-bold bg-clip-text bg-gradient-to-b from-stone-700 to-gray-500 text-transparent p-2">Web Designer & Developer.</span>
                    <a className="bg-blue-500 border-2 border-blue-800 text-white font-bold p-2 rounded-md w-24 hover:bg-green-500 text-center hover:shadow-xl hover:shadow-blue-900" target="_blank" href="https://drive.google.com/open?id=1dzj09jqal6Vf-n5R4iOHzhidJ95sZg0x&authuser=0">Resume</a>
                </div>
            </div>
            <img className="w-full h-screen md:h-96 sm:h-96 shadow-md shadow-yellow-300 object-cover" src="/profile-background.jpg" />
        </div>
    );
}
export default Home