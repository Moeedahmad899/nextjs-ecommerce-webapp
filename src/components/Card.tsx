import Image from 'next/image'
import Link from 'next/link'
type ProductType = {
    id?: number,
   
    img: string,
    name: string,
    tag: string,
    price:number,

    
}
export default function Card({id,img,name,tag,price}:ProductType) {
    return (
        <Link href={`products/${id}`}>

<div className='w-[332px] mt-12 '>
        <Image className='bg-[#d7d7d9]'
              src={img}
              alt='product image'
              width={400}
              height={270}>
                
            </Image>
            <p className='text-base mt-2 font-semibold leading-24 tracking-tighter text-gray-800'>{name }</p>
            <p className='font-semibold text-base leading-15 text-gray-600 mt-2'>{ tag}</p>
            <p className='text-2xl mt-4 font-bold leading-24 tracking-tighter text-gray-800'>${ price}</p>
        </div>
        </Link>
       

    )
    
        
   
}
  
