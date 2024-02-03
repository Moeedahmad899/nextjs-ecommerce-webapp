import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import Link from 'next/link'
function Hero() {
  return (
    <section className='flex flex-col  lg:flex-row mb-20 mt-24 mx-32'>
      {/* left div */}
    <div className='flex-1 pr-20'>
      <Badge className='py-1 px-5 bg-blue-100 text-blue-700 rounded-lg text-lg '>Sale 70%
</Badge>
      <h1 className="pt-10 font-semibold text-6xl leading-55 tracking-wide text-gray-800">
      An Industrial Take on Streetwear

      </h1>
      <p className="leading-7 py-6 [&:not(:first-child)]:mt-6 text-base">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.


        </p>
      
        <Link href={"/products"}>
          <Button  className='bg-black h-16 px-6 my-5 ' >
            <ShoppingCart  className='h-5 w-5 mr-5' />
            Start Shopping
          
          </Button>
        </Link>
       
       
    
        <div className='flex gap-x-5 pt-6'>
          <Image src={"/images/Featured1.webp"} alt='hero image' width={100} height={100} />
          <Image src={"/images/Featured2.webp"} alt='hero image' width={100} height={100} />
          <Image src={"/images/Featured3.webp"} alt='hero image' width={100} height={100} />
          <Image src={"/images/Featured4.webp"} alt='hero image' width={100} height={100} />
        </div>
      </div>
      {/* right div */}
      <div className='flex-1  '>
        <div className='bg-[#ffece3] rounded-full flex justify-center  w-[600px] h-[600px]'>
        <Image src={"/images/hero-poster.webp"} alt='hero image' width={650} height={650}/>
        </div> 
       
      </div>
      </section>

      )
}

export default Hero
