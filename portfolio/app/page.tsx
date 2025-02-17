'use client'

import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skils";
import Link from "next/link";
import { BsLinkedin, BsTwitter,  BsYoutube } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

export default function Home() {


  return (
    <div className="bg-gray-300 min-w-[100vw] max-h-[100vh] container ">
      <nav className="   fixed top-0  z-30">
        <h1 className=" md:text-5xl bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 w-fit p-4"><span>H</span><span className="text-red-600">13</span>.</h1>
     
    </nav>
    <div className="p-4 border-[1px] z-30 border-gray-400 rounded-full flex absolute top-4 left-1/2 text-2xl gap-4 bg-gray-300 text-gray-600 -translate-x-1/2">
          <Link href={'https://www.linkedin.com/in/himal-bhusal-35b722228/'}><BsLinkedin className=" hover:text-blue-600  transition-all"/></Link>
          <Link href={'https://github.com/himal-13'}><GrGithub className=" hover:text-black  transition-all"/></Link>
          <Link href={'https://www.youtube.com/@4thirteenYT'}><BsYoutube className=" hover:text-red-600  transition-all"/></Link>
          <Link href={'https://x.com/himal_13'}><BsTwitter className=" hover:text-blue-400  transition-all"/></Link>

        </div>
 
      <div className={`w-full font-sans`}>
        <Intro/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>

  );
}
