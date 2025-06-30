
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layouts/MainLayout.jsx";




const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact_us" element={<Contact />} />
          </Route>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
