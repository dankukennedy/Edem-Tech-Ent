import React from 'react'

const OverView:React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-red-400 to-red-800 text-white text-center py-16' id='about'>
      <h1 className='text-3xl font-bold '>
        We are {' '}
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-800 font-serif'>
           team of passionate software
         </span>{' '}
         developers at <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-black'>Edem-Tech Enterprise</span>
      </h1>
       <div className='py-2 my-2 justify-between mt-8'>
             <h1 className='text-black font-semibold text-2xl font-serif'>
              Over 2 Years  Experience  in software development
             </h1>
             <p className='mt-6 font-serif '>
             Edem-Tech Ent for the past 2 years have been developing Responsive websites, web application and system for it's clients.
             Do not hesitate to contact Edem_Tech Enterprise for any IT services<p>Edem-Tech is eve ready to contact you for any development.</p> 
               <p>
                We do specialize in web application development with good responsive features. 
               </p>
             </p>
             <div className='mt-8 space-x-4'>
               <a href="#" target="_blank" rel="noopener noreferrer">
                <button className='bg-gradient-to-r from-blue-400 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 my-1 py-2 rounded-full font-serif' >
                LinkedIn Page
                </button>
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer">
               <button
             className='bg-gradient-to-r from-blue-400 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 my-1 py-2 rounded-full font-serif'>
            Facebook Page
        </button>
        </a>
             </div>
       </div>
    </div>
  )
}

export default OverView