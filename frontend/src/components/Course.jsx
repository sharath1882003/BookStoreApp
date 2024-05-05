import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
     <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>
          we're delight to have you <span className='text-pint-500'>Here!</span>
        </h1>
        <p className='mt-12'>
        A book is a medium for recording information in the form of writing or images.
         Books are typically composed of many pages, 
        bound together and protected by a cover. 
        Modern bound books were preceded by many other written mediums, such as the codex and the scroll.
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
          Back
          </button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>
     </div>
    </>
  )
}

export default Course