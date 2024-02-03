import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react"
import { Search } from 'lucide-react'

export default function Header() {
    return (
      
      <header className='my-8 mx-32 '>
            <nav className='flex justify-between items-center'>
                
              <Link href="/">
                <Image
                    src={"/Logo.webp"}
                    alt='website logo'
                    width={140}
                    height={25}>
                </Image>
              </Link>    
      
          <ul className='flex gap-12'>
              <li  className='font-medium'> <Link href={"/female"}>Female</Link></li>
              <li className='font-medium'> <Link href={"/male"}>Male</Link></li>
              <li className='font-medium'> <Link href={"/kids"}>Kids</Link></li>
              <li className='font-medium'> <Link href={"/products"}>All Products</Link></li>
          </ul>

          <form className='flex border-2 items-center   rounded border-solid  border-[#e4e5eb]'>
    <Search className='bg-white h-3.5  ' />
    <input type="text" className='text-sm w-[20rem] ' placeholder='What are you looking for?'  />
</form>

              
              
          <a className="relative items-center  bg-gray-200 hover:bg-gray-300 p-3 mr-2 rounded-full " href="#">
    <ShoppingCart></ShoppingCart> <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-red-500   rounded-full -top-1 -end-1 " >0</div>
          </a>
     
          </nav>
         
   </header>
  )
}
