import Image from 'next/image'
import Link from 'next/link'
import { Twitter } from 'lucide-react'
import { Facebook } from 'lucide-react'

import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='pt-12 ' >
      <div className='flex mx-32  '>
              <div className='w-1/2 flex flex-col justify-between'>
                
                  <Link href={"/"}>
                      <Image
                      
                      src={"/Logo.webp"}
                      alt='website logo'
                      width={180}
                      height={35}>
                      </Image>
                  </Link>
                  <p className='w-4/5'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                      
                  </p>
                  <div className='flex gap-4'>
                     
                      <div className=' p-2 md:p-3 bg-gray-200 rounded-md cursor-pointer'> <FaTwitter/></div>
                      <div className=' p-2 md:p-3 bg-gray-200 rounded-md cursor-pointer'> <FaFacebookF/></div>
                      <div className=' p-2 md:p-3 bg-gray-200 rounded-md cursor-pointer'><FaLinkedinIn/></div>
                  </div>

              </div>     

              <div  className='w-1/4'>
                  <h3 className='font-bold text-lg leading-19 tracking-wide text-gray-600'>Company</h3>
                  <ul className='font-normal  text-base leading-22 text-gray-600 mt-6'>
                      <li className='pb-4'>About</li><li className='pb-4'>Terms of Use</li><li className='pb-4'>Privacy Policy</li><li className='pb-4'>How it Works</li><li>Contact Us</li>
                  </ul>
              </div>

              <div  className='w-1/4'>
                  <h3 className='font-bold text-lg leading-19 tracking-wide text-gray-600 '>Support</h3>
                  <ul className='font-normal text-base leading-22 text-gray-600 mt-6'>
                      <li className='pb-4'>Support Carrer
        </li ><li className='pb-4'>24h Service</li><li>Quick Chat</li>
                  </ul>
              </div>

              <div  className='w-1/4'>
                  <h3 className='font-bold text-lg leading-19 tracking-wide text-gray-600'>Contact</h3>
                  <ul  className='font-normal text-base leading-22 text-gray-600 mt-6'>
                      <li className='pb-4'>Whatsapp</li><li>Support 24h</li>
                  </ul>
              </div>
              
       </div>
          <div className=' copyright  border-t border-solid border-gray-600 mt-24 ' >
              
              <div className='mx-32 flex justify-between'>
              <p className='font-normal text-base leading-22 text-gray-600 my-6'>Copyright © 2022 Dine <br/>Market </p>
              <p className='font-normal text-base leading-22 text-gray-600 my-6'>Design by. <span className="font-bold text-base leading-15 text-gray-800"
>Weird <br/>Design Studio</span></p>

              <p className='font-normal text-base leading-22 text-gray-600 my-6'>Code by.  <span className="font-bold text-base leading-15 text-gray-800">Moeedahmad899 on <br/> github</span></p>
              </div>
             
         </div>
   </footer>
  )
}
