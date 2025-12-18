import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";

import Cart from "./Cart";
import Contact from "./Contact";
import ProductDetails from "./ProductDetails";

function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/products/:id" element={<ProductDetails/>}/>
           <Route path="/cart" element={<Cart />} />
           <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App