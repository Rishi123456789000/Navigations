
import Fakeapi from "../screens/products.screen";
import {  Routes, Route } from "react-router-dom"; 
import Login from "../screens/loginscreens";
import Homescreen from "../screens/homescreen";
import About from "../screens/aboutscreen";
import Categoery from "../screens/catagoery";
import Jeweleryscreen from "../screens/jeweleryscreen";
import Electronicsscreen from "../screens/electronicsscreen";

const Nav = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Fakeapi />} />
        <Route path="/About" element={<About/>} />


        <Route path="/category" element={<Categoery/>}>
           
        <Route path="jewelery" element={<Jeweleryscreen/>} />
        <Route path="electronics" element={<Electronicsscreen/>} />

      </Route> 
          
        
        
      



      </Routes>
    
  );
};

export default Nav;
