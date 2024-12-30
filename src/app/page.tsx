/* eslint-disable react/jsx-no-undef */

import Hero from "@/app/Components/Hero";
import FeaturedProducts from "@/app/Components/FeaturedProducts";

import Logo from "@/app/Components/Logo";
import AllProducts from "./Components/AllProducts";
// import Allproductdata from "./Components/Allproductdata";
// import AllProducts from "./Components/AllProducts";

// import { Products } from "./Components/Products";



// import { Products } from "./SingleProducts/products";


// import SingleProducts from  "@/app/Components/SingleProducts";
// // import NewLetter from '@/app/NewLetter'
export default function Home() {
  return (
    <div>
     
    {/* <Products/> */}
   {/* <NewLetter /> */} 
      {/* <Header /> */}
      {/* <AllProducts /> */}
      <Hero />
     < Logo />
      <FeaturedProducts />
      <AllProducts />
      {/* <Allproductdata /> */}
      {/* <SingleProducts /> */}
      {/* <TopCategories /> */}
     {/* < VerticalText /> */}
    </div>
  );
}
   