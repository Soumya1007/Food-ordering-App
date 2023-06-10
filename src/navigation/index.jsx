import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentSucess from "../pages/PaymentSuccess";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";
const Navigation =() =>{
    const productInCart=useSelector(cartProducts);
    return (
        <BrowserRouter>
         <Header cartCount={productInCart ? productInCart.length : 0}/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment-success" element={<PaymentSucess/>} />
         </Routes>
         <Footer/>
        </BrowserRouter>
    )
}

export default Navigation;