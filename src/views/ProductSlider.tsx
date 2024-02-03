import * as React from "react"
import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[81%] mx-32 "
    >
       <p className='text-center   py-4  text-xs font-bold leading-4 tracking-wider text-blue-500'>PRODUCTS</p>
          <h2 className='text-center  font-bold  text-3xl leading-10 tracking-wide text-gray-800'>Check What We Have</h2>
      <CarouselContent className="pt-10 ">
        
        { Array.from({ length: 7 }).map((_, index) => (
          
            
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <Link href={`products/${products[index].id}`}>
            <div className=" ">
            
            <div className='w-[400px] hover:scale-110	 transition-transform duration-500 ease-in-out'>
        <Image
              src={`${products[index].img}`}
              alt='product image'
              width={400}
                  height={400}
              
                >
                  
            </Image>
            <p className='text-xl mt-2 font-semibold  tracking-tighter text-gray-800'>{products[index].name }</p>
            <p className='text-lg  font-semibold  tracking-tighter text-gray-800'>${products[index].price}</p>

        </div>
              
            </div>
            </Link>
         
          </CarouselItem>
           
        
        ))}
      </CarouselContent>

    </Carousel>
  )
}
