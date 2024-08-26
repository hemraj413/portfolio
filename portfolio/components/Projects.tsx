import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsGithub } from "react-icons/bs"
import { FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
    const[projects]= useState([
        {image:'/images/movie-app.png',title:'Movie app',github:'https://github.com/himal-13/movies-app',website:'https://movies-app-three-xi.vercel.app/'},
        {image:'/images/social-app.png',title:'Social Media app',github:'https://github.com/himal-13/daily-posts',website:'https://daily-posts-eight.vercel.app/'},
        {image:'/images/quiz-game.png',title:"Quiz Game", github:'https://github.com/himal-13/quiz-game-web',website:'https://quiz-game-web.vercel.app/'},
        {image:'/images/weather-app.png',title:'Weather app',github:"https://github.com/himal-13/weather-app",website:"https://weather-app-one-zeta-23.vercel.app/"}
    ])
    return (
        <main className="h-[100vh] w-full flex flex-col justify-center items-center gap-[5vh]" id="projects">
            <h1 className="text-5xl border-b-8 border-purple-600 rotate-[-10deg] ">Projects</h1>
            <div className="grid grid-cols-2 gap-6 max-w-[70vw] mx-auto sm:scale-100 scale-[1.2]">
                        {projects.map((proj,index)=>(
                            <div className="shadow-xl shadow-gray-400 bg-gray-300" key={index}>
                                <Image alt="" src={`${proj.image}`} height={400} width={500} className=""/>
                                <h4 className="md:text-3xl sm:text-xl text-sm flex sm:flex-row flex-col items-center justify-between py-2 mx-2"><span>{proj.title}</span><span className="flex gap-3 text-purple-900"><Link href={`${proj.github}`} target="_blank"><BsGithub /></Link><Link href={`${proj.website}`} target="_blank"><FaExternalLinkAlt /></Link></span></h4>
                            </div>
                        ))}

            </div>
        </main>
    )
}

export default Projects