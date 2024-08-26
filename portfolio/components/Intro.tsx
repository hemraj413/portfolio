import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Intro = () => {
    return (
        <main className='h-[100vh] w-full flex flex-row-reverse sm:flex-row justify-center items-center gap-[3vw] xl:scale-95  md:scale-90 sm:scale-75 scale-[.8] intro' id='intro'>
            <div className="bg-[url('/profile.jpg')] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] rounded-full   bg-center bg-cover shadow-xl shadow-green-800 self-center"> </div>
            <div className="">
                <h3 className='sm:text-3xl text-xl font-mono '>Hii <span className='text-purple-600'>There!</span><span>I&apos;m </span></h3>
                <h1 className='sm:text-5xl text-2xl font-bold text-purple-700'>Himal Bhusal</h1>
                <p className='sm:max-w-[40vw] xl:max-w-[30vw] sm:text-2xl w-[50vw]'>Frontend web developer passionate about creating interactive web pages.</p>
                <section className="flex sm:flex-row flex-col  max-w-fit gap-6 my-5">
                    <button type='button' className='px-6 py-3 rounded-xl bg-purple-600 text-white font-thin '>Resume</button>
                    <div className="flex gap-2">
                        <div className="p-4 rounded-lg shadow-xl shadow-purple-300 bg-gray-100 hover:text-white hover:bg-purple-500 text-purple-600 cursor-pointer"><BsGithub /></div>
                        <div className="p-4 rounded-lg shadow-xl shadow-purple-300 bg-gray-100 hover:text-white hover:bg-purple-500 text-purple-600 cursor-pointer"><BsLinkedin /></div>

                    </div>
                </section>
            </div>

        </main>

    )
}

export default Intro