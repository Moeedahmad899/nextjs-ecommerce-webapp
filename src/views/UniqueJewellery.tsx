import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
 import Link from 'next/link'
function UniqueJewellery() {
  return (
      <div className='  bg-[#fbfcff] mt-64 '>
          
          <div className='flex py-32 gap-x-20 mx-32'>
         
              {/* left */}
              <div className='w-2/4 relative z-10'>
              <p className=' font-bold text-[8rem] leading-[7rem]  text-gray-100 absolute -z-50'>Different from other</p>
                  <div className='flex mb-12 gap-x-8'>
                      <span>
                          <h5 className='font-semibold	 pb-3 text-lg	 leading-5 tracking-wide text-gray-700'>Using Good Quality Materials</h5>
                          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                      </span>
                      <span>
                          <h5 className='font-semibold  pb-3	 text-lg	 leading-5 tracking-wide text-gray-700'>100% Handmade Products</h5>
                          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                      </span>
                  </div>

                  <div className='flex gap-x-8'>
                      <span >
                          <h5 className='font-semibold pb-3	 text-lg	 leading-5 tracking-wide text-gray-700'>Modern Fashion Design</h5>
                          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                      </span>
                      <span>
                          <h5 className='font-semibold pb-3	 text-lg	 leading-5 tracking-wide text-gray-700'>Discount for Bulk Orders</h5>
                          <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                      </span>
                  </div>
              </div>
              {/* right */}
              <div className='w-2/4' >
              <h2 className='-mt-56 text-[2.7rem]  font-extrabold'>Unique and Authentic Vintage Designer Jewellery</h2>
                  <div className='flex gap-x-8'>
                      <div >
                      <Image src={"/images/feature.webp"} alt='hero image' width={360} height={400}/>
                      </div>
                      <div className='w-2/4'>
                          <p className='mb-6 text-justify leading-[1.6rem]'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                          <Link href="/products">
                          <Button className='bg-black h-16 px-4 my-5   '>
         
         See ALL Product
       </Button>
                          </Link>
                         
                      </div>
                  </div>
              </div>
       </div>
        
    </div>
  )
}

export default UniqueJewellery
