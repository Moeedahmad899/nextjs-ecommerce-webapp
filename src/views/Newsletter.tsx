import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
function Newsletter() {
  return (
      <div className=' px-20 py-36  flex flex-col justify-center items-center relative z-10'>
          <p className='font-bold text-[9rem] leading-151 text-gray-100 absolute -z-50'>Newsletter</p>
          <h2 className='text-4xl font-bold'>Subscribe Our Newsletter</h2>
          <p className='py-6'>Get the latest information and promo offers directly</p>
          <form className='flex'>
          <Input type="email" placeholder="input email address" className='bg-white  border border-gray-500 rounded-none	 mr-4 p-4 pr-32 '/>
       
        <Link href={"#"}> <Button className='text-white rounded-none	bg-black font-bold'>Get Started</Button>   </Link>
          </form>
        
    </div>
  )
}

export default Newsletter
