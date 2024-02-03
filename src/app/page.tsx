import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Promotions from '@/views/Promotions'
import { ProductSlider } from '@/views/ProductSlider'
import Newsletter from '@/views/Newsletter'
import UniqueJewellery from '@/views/UniqueJewellery'
export default function Home() {
  return (
    <>
      <Hero /> 
      <Promotions/>
      
      <ProductSlider />
      <UniqueJewellery/>
      <Newsletter />
     
    </>
    
  )
}
