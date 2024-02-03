import React from 'react'

function ProductInfo() {
  return (
    <div className=' bg-[#fcfcfc]'>
 <div className='bg-white p-8   mx-32 '>
      <div className='py-20 relative z-10 border-b-2 border-solid border-gray-400'>
           <p className='font-bold text-[9rem] top-[-16px] leading-151 text-gray-100 absolute -z-50'>Overview</p>
            <p className='font-bold text-3xl'> Prodcut information</p> 
       </div>
       {/* product detail container  */}
      <div>
        
        <div className='flex gap-x-20 mb-12 pt-12'>
          <div className='w-1/4'>
            <h4 className='pr-16'>PRODUCT DETAILS</h4>
          </div>
          <div className='w-3/4'>
           <p className='flex-2 flex-shrink-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>   
             
      </div >

        <div className='flex gap-x-20 '>
          <div className='w-1/4' >
            <h4 className='pr-8' >PRODUCT DETAILS</h4>
          </div>
          <div className='w-3/4'>
           <ul className='list-disc pl-5'>
                  <li>Hand wash using cold water.</li>
                  <li>Do not using bleach.</li>
                  <li>Hang it to dry.</li>
                  <li>Iron on low temperature.</li>
          
              </ul>
           </div>
              
        </div>
        
      </div>
    </div>
    </div>
   
  )
}

export default ProductInfo
