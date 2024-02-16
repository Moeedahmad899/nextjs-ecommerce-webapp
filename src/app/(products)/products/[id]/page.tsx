
import SingleProdcut from "@/components/Products/SingleProdcut"
import ProductInfo from "@/components/Products/ProductInfo"
import { products } from "@/data/products";
export async function generateStaticParams() {
 
 
  return products.map((product) => ({
    id: ` ${product.id}` ,
  }));
}
function getProductByID(id: number) {
  return  products.filter(filteredData => filteredData.id == id);
 
}

export default function ProductDetailPage({ params }: { params: { id: number } }) {
    const singleProductData = getProductByID(params.id); 

  if (!singleProductData) {
    console.log("Cannot find the data of given ID");
    }
    return <div>
   
        
      
         {singleProductData.map((product, index) => {
          
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