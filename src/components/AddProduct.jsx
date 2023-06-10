export const AddProduct=({onAddProduct})=>{
    return (
    <div className="flex justify-end">
        <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-600 rounded-full w-5 h-5 items-center flex justify-center text-lg"><span>+</span></button>
    </div>
    )
}