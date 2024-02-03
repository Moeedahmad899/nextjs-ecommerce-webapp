import Card from "@/components/Card"
import { products } from "@/data/products"
import { Fragment } from "react";
export default function Page() {
 
   
  return <Fragment>
    <div className='mx-32 my-5 flex gap-12 flex-wrap'>
    {products.map((product, index) => {
          
          return <Card
            key={product.id}
            id ={product.id}
            img={product.img}
            name={product.name}
            tag={product.tag}
            price={product.price}
          
          />;
          })}

    </div>
  
    </Fragment>
  }