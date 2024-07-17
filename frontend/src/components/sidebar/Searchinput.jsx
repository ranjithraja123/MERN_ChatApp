import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Searchinput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input className='input input-bordered rounded-full' placeholder='Search...' type='text' />
        <button type='submit' className='btn btn-circle bg-green-700 text-white'>
        <IoSearchSharp className='w-6 h-6 putline-none' />
        </button>
    </form>
  )
}

export default Searchinput
