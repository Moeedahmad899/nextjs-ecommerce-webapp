import React from 'react'
import Image from 'next/image'
function ProductList() {
  return (
    <div className='mx-32'>
          <Image src={"/img1.png"} alt='hero image' width={200} height={200} />
          <h3 className='font-bold text-lg mt-3'>shirt</h3>
          <p className='font-bold text-lg'>$130</p>
    </div>
  )
}

export default ProductList
