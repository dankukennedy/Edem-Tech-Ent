import React from 'react'
  
interface Services{
    id:number;
    title:string;
    description:string
}
const services : Services[]=[
    {
        id:1,
        title:"Web Design",
        description:"Creating visually and user-friendly web designs.",
    },
    {
        id:2,
        title:"Frontend Development",
        description:"Building responsive and interactive user interfaces.",
    },
    {
        id:3,
        title:"Backend Development",
        description:"Developing robust sever-side logic and databases.",
    },
    {
        id:4,
        title:"Full-Stack Development",
        description:"Combining both frontend and backend development skills.",
    },
    {
        id:5,
        title:"Mini Projects Development",
        description:"Developing mini project for students and small businesses.",
    },
    {
        id:6,
        title:"IT Consultancy",
        description:"Providing consultancy services for business.",
    },
    
];

const Service : React .FC = () => {
  return (
    <div >
        <div className='bg-gradient-to-r from-red-400 to-red-800 text-white py-20 ' id='service'>
           <div className='container mx-auto px-8 md:px-16 lg:px:24'>
             <h2 className='text-4xl font-bold text-center mb-12 font-serif'>Our Services</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 {services.map(service =>(
                    <div key={service.id}
                    className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                        <b className=' py-0 px-3 bg-white bg-gradient-to-r from-blue-300 to-blue-600 text-white font-serif'>{service.id} </b>
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-serif'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300 font-serif'>{service.description}</p>
                        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500 font-serif'>Read More</a>
                    </div>
                 ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Service