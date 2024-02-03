import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Promotions() {
  return (
    <div className='my-20 mx-32'>
          <p className='text-center py-4 text-xs font-bold leading-4 tracking-wider text-blue-500'>PROMOTIONS</p>
          <h2 className='text-center font-bold  text-3xl leading-10 tracking-wide text-gray-800'>Our Promotions Events</h2>
          <div className=' flex w-full pt-10 gap-4'>
              {/* left */}
              <div className='w-2/4 ' >
                  {/* box1 */}
                  <div className='flex mb-4  bg-[#d6d6d8] items-center '>
                      <div className=' pl-6'>
                        <h3 className='font-bold text-3xl	 leading-10'>GET UP TO 60%</h3>
                        <span className='text-xl '>For the summer season</span>
                      </div>
                      <div>
                      <Image src={"/images/event1.webp"} alt='hero image' width={260} height={200}/>
                      </div>
                   
                  </div>
                  {/* box2  */}
                  <div className='p-12 	 bg-[#212121] text-white text-center' >
                      <h3 className='text-4xl mb-4 font-black	'>GET 30% Off</h3>
                      <p>USE PROMO CODE</p>
                      <Button className='mt-1 py-2 px-14 tracking-[0.3rem] font-bold	bg-[#474747] text-lg hover:bg-[#474747]]'>DINEWEEKENDSALE</Button>
                  </div>
              </div>

              {/* right */}
              <div className='flex w-3/5 gap-x-4 '>
                  <div className='bg-[#efe1c7] pl-4'>
                      <p className='pt-6 '>Flex Sweatshirt</p>
                      <div className='flex gap-x-2 items-center'>
                          <p className='line-through'>$100.00 </p>
                          <span className='font-bold text-[1.2rem] '> $75.00</span>
                      </div>
                    
                      <Image src={"/images/event2.webp"}  alt='hero image' width={282} height={362}/>
                  </div>

                  <div className='bg-[#d6d6d8] pl-4'>
                      <p className='pt-6'>Flex Push Button Bomber</p>
                      <div className='flex gap-x-2 items-center'>
                          <p className='line-through'>$225.00 </p>
                          <span className='font-bold text-[1.2rem]'> $190.00</span>
                      </div>
                      <Image src={"/images/event3.webp"} alt='hero image' width={282} height={362}/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Promotions
