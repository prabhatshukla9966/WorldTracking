import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import AppLayout from "./pages/AppLayout"
import Pagenotfound from "./pages/Pagenotfound"
import Login from "./pages/Login"
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>

<Route path="/" element={<Homepage/>} /> 
<Route path="product" element={<Product/>} /> 
<Route path="pricing" element={<Pricing/>} /> 
<Route path="/login" element={<Login/>}/>
<Route path="app" element={<AppLayout/>} />
<Route path="*" element={<Pagenotfound/>} />


      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
