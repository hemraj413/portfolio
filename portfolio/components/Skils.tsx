import { useState } from "react";
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Skills =()=>{
    const[skillsItems]= useState([
        { icon: <DiHtml5 />,text:'HTML'},{ icon: <DiCss3/>,text:'CSS'},{ icon: <RiJavascriptFill/>,text:'JavaScript'},{ icon: <DiReact/>,text:'React'},{ icon: <RiTailwindCssFill/>,text:'Tailwind CSS'},
        { icon: <RiNextjsFill/>,text:'Next JS'},{ icon: <RiNextjsFill/>,text:'Node JS'},{ icon: <SiTypescript/>,text:'TypeScript'},
    ])
    return(
        <main className="h-[100vh] w-full flex flex-col justify-center gap-[5vh] items-center" id="skills">
            
            <h1 className="text-5xl border-b-8 border-purple-600 rotate-[-10deg] ">Skills</h1>
            <div >
                <section className="text-gray-600 md:text-6xl text-5xl grid grid-cols-3 gap-6 all-skills mx-6">
                    {skillsItems.map((skill,index)=>(
                        <div className="hover:text-purple-950 flex flex-col justify-center items-center" key={index}>
                            {skill.icon}
                            <h4 className="md:text-3xl text-xl">{skill.text}</h4>
                        </div>
                    ))}
                    
                </section>
            </div>

        </main>
    )
}

export default Skills;