
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";




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
