import Product from "./components/Product";
import Hero from "./components/Hero";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login"
import Joinus from "./components/Joinus";
import Card from "./components/Card";
import Contact from "./components/Contact"
import Items from "@/Items.tsx/page";


export default function Home() {
  
  return (
      <div>
        <Hero/>
      <Product/>
      <ProductDetail/>
      <Login/>
      <Joinus/>
      <Card/>
      <Contact/>
       <Items/>

      </div>
  );
}
