import { cartProducts } from "../stores/cart/cartSlice";
import { useSelector } from "react-redux";
import { ProductSummaryCard } from "./ProductSummaryCard";

export const ProductSummary=()=>{
    const cart=useSelector(cartProducts);
   return (
    <div className="flex flex-col">
    {cart && cart?.map((product,index)=>{
      return (
        <ProductSummaryCard product={product} key={index}/>
      )
    })}
    </div>
   )
}