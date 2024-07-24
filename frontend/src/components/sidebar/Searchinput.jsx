import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const Searchinput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    if(search.length < 3) {
      return toast.error('Search term must be more than 3 characters')
    }
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("")
    } else toast.error("No such user found")
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input className='input input-bordered rounded-full' placeholder='Search...' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type='submit' className='btn btn-circle bg-green-700 text-white'>
        <IoSearchSharp className='w-6 h-6 putline-none' />
        </button>
    </form>
  )
}

export default Searchinput
