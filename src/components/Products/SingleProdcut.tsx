"use client"
import Image from "next/image"
import { Button } from '@/components/ui/button'

import { ShoppingCart } from "lucide-react"
import { Plus } from "lucide-react"
import { Minus } from "lucide-react"
import  { useState } from 'react';
type ProductType = {
 
    img: string,
    name: string,
    price:number,
    
  }

export default function SingleProdcut({img,name,price}:ProductType) {
     // State for the counter
 const [counter, setCounter] = useState(1);

 // Function to handle incrementing the counter
 const handleIncrement = () => {
   setCounter(prevCounter => prevCounter + 1);
 };

  // Function to handle decrementing the counter (never below 0)
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };
    return <div className="bg-[#fcfcfc] py-12  ">
        <div className="flex gap-8 mx-32">
            <div>
            <Image
              src={img}
              alt='product image'
              width={50}
              height={70}>
            </Image>
            </div>
            
            <div>
          <Image
            
              src={img}
              alt='product image'
              width={550}
              height={370}>
            </Image>
            </div>
            
            <div className="flex flex-col flex-1 mt-16 gap-4">
                <div>
                    <h3 className="font-bold text-3xl  text-gray-900">{ name}</h3>
                <span className="font-semibold text-lg opacity-30">Sweater</span>
                </div>
               
                <div className="pt-8">
                    <p className="text-gray-700 font-bold text-[1rem] uppercase">select size</p>
                    <ul className="font-bold  flex gap-y-12 gap-x-6 mt-4">
                        <li className="w-10 h-10 flex justify-center items-center  rounded-full cursor-pointer text-lg text-gray-500 hover:shadow-lg">XS</li>
                        <li className="w-10 h-10 flex justify-center items-center  rounded-full cursor-pointer text-lg text-gray-500 hover:shadow-lg">S</li>
                        <li className="w-10 h-10 flex justify-center items-center  rounded-full cursor-pointer text-lg text-gray-500 hover:shadow-lg">M</li>
                        <li className="w-10 h-10 flex justify-center items-center  rounded-full cursor-pointer text-lg text-gray-500 hover:shadow-lg">L</li>
                        <li className="w-10 h-10 flex justify-center items-center  rounded-full cursor-pointer text-lg text-gray-500 hover:shadow-lg">XL</li>
                    </ul>
                </div>

            <div className="flex gap-4 items-center">
                <h4 className="font-bold text-lg">Quantity:</h4>
                <div onClick={handleDecrement} className=" border-2 border-gray-200 bg-gray-200 rounded-full p-1  cursor-pointer"><Minus/></div>
                    <div>{ counter}</div>
                <div onClick={handleIncrement} className="border-2 border-solid border-black rounded-full p-1 cursor-pointer"><Plus/></div>
            </div>
                
            <div className="flex gap-x-6 items-center">
          
                    <div>
                        <Button className='bg-black h-12 px-6 my-5 '>
                        <ShoppingCart  className='h-5 w-5 mr-5 font-extrabold rounded-none' />
                        Add to Cart
                        </Button>
                    </div>
                    <div>
                     <p className="font-bold text-2xl">${price}</p>
                    </div>
              
            </div>
            </div>
          
           
        

        </div>


    </div>
  }