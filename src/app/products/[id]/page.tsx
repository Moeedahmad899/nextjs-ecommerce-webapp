export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post:any )=> ({
    id: post.id,
  }))
}


import SingleProdcut from "@/components/Products/SingleProdcut"
import ProductInfo from "@/components/Products/ProductInfo"
import { products } from "@/data/products";
export default function Page({ params }: { params: { id: number } }) {
  
    const filteredData = products.filter(filteredData => filteredData.id == params.id);
    console.log(filteredData);
    return <div>
   
        
      
         {filteredData.map((product, index) => {
          
          return <SingleProdcut
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          
          />;
         })}
          <ProductInfo/>
    </div>
  }