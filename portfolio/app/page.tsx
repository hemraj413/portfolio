'use client'

import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skils";
import Link from "next/link";
import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineAccountCircle, MdWork } from "react-icons/md";

export default function Home() {
  const[activeNav,setActiveNav]= useState('home')
  const[currentPage,setCurrentPage]= useState(0)

  const handleNavClick=(value:string)=>{
    setActiveNav(value)
    if(value==='home'){
      setCurrentPage(0)
    }else if(value==='projects'){
      setCurrentPage(100)
    }


  }
  return (
    <div className="bg-gray-300 min-w-[100vw] max-h-[100vh] container overflow-hidden">
        <nav className="sm:w-fit w-full text-white h-[10vh] sm:h-screen fixed bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 bottom-0 flex sm:flex-col flex-row ">
        <h1 className=" md:text-5xl  font-mono sm:w-full h-[10vh] sm:bg-purple-800 xl:px-5 sm:flex justify-center items-center sm:relative sm:top-0 sm:left-0 fixed top-4 left-4 w-fit text-black sm:text-white text-6xl sm:text-2xl"><span>H</span><span className="text-red-600">13</span>.</h1>
        <ul className=" absolute top-1/2 px-2 -translate-y-1/2 xl:px-5 sm:w-auto sm:block flex justify-between items-center w-full  text-4xl">
        
          <Link href='#intro' scroll={true} ><li className={activeNav==='home'?`text-black`:'text-white'} onClick={()=>handleNavClick('home')}><BiHome/></li></Link>
          <Link href='#skills' scroll={true} ><li className={activeNav==='account'?`text-black`:'text-white'} onClick={()=>handleNavClick('account')}><MdOutlineAccountCircle /></li></Link>
          <Link href='#projects'><li className={activeNav==='projects'?`text-black`:'text-white'} onClick={()=>handleNavClick('projects')}><MdWork/></li></Link>
          {/* <li className={activeNav==='contact'?`text-black`:'text-white'} onClick={()=>handleNavClick('contact')}><IoCall/></li> */}
        </ul>


    </nav>
      <div className={`w-full font-sans main`}>
        <Intro/>
        <Skills/>
        <Projects/>
      </div>
    </div>

  );
}
