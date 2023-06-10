import { AddProduct } from "./AddProduct";

export const ProductsPreviewCard=({product,onAddProduct})=>{
    const addProduct=()=>{
        onAddProduct(product);
    }
    return (
        <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-30 line-clamp-5">{product.description}</p>
            <AddProduct onAddProduct={addProduct}/>
        </div>
    )
}