import Card from "@/components/Card"
import { products } from "@/data/products"
import { Fragment } from "react";
export default function Page() {
  const filteredData = products.filter(filteredData =>  filteredData.category === "female" );
  
  return <Fragment>
    <div className='mx-32 my-5 flex gap-12 flex-wrap'>
    {filteredData.map((product, index) => {
          
      return <Card
            id = {product.id}
            key={product.id}
            img={product.img}
            name={product.name}
            tag={product.tag}
            price={product.price}
          
          />;
          })}

    </div>
  
    </Fragment>
  }