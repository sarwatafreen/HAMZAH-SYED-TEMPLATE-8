import Image from 'next/image';
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { useRouter } from 'next/router';
import Link from "next/link";
// import { Products } from './app/Products'; // Ensure correct path to where Products is exported
// return (
  interface Product {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    isNew?: boolean;
    isSale?: boolean;
  }
  
  export default function AllProducts() {
    const products: Product[] = [
      {
        id: 1,
        title: "Library Stool Chair",
        price: 20,
        image: "/01.jpg",
        isNew: true,
      },
      {
        id: 2,
        title: "Library Stool Chair",
        price: 20,
        originalPrice: 30,
        image: "/02.jpg",
        isSale: true,
      },
      {
        id: 3,
        title: "Library Stool Chair",
        price: 20,
        image: "/03.jpg",
      },
      {
        id: 4,
        title: "Library Stool Chair",
        price: 20,
        image: "/04.jpg",
      },
      {
        id: 5,
        title: "Library Stool Chair",
        price: 20,
        image: "/05.jpg",
        isNew: true,
      },
      {
        id: 6,
        title: "Library Stool Chair",
        price: 20,
        originalPrice: 30,
        image: "/06.jpg",
        isSale: true,
      },
      {
        id: 7,
        title: "Library Stool Chair",
        price: 20,
        image: "/07.jpg",
      },
      {
        id: 8,
        title: "Library Stool Chair",
        price: 20,
        image: "/01.jpg",
      },
    ];
    return (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight  mb-8">
      {" "}
      Our Products
    </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group relative rounded-lg bg-white">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            {product.isNew && (
              <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                New
              </Badge>
            )}
            {product.isSale && (
              <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                Sales
              </Badge>
            )}
            <Link href={"components/productDectription/discription"}>
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-medium text-[#1C1B1F]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

//   import Image from 'next/image';
// // //  import { Key } from 'react';
// import {Products}from  './Products' 

// function SingleProductPage() {
//   const { featuredProduct, otherProducts } = Products;
//   return (
//     <div className="container mx-auto p-6">
//       <div>
//         {/* <div className="text-center">
//           <Image
//             src={`/${featuredProduct.image}`}
//             alt={featuredProduct.name}
//             width={500}
//             height={500}
//             className="mx-auto"
//           /> */}
//           <h2 className="text-2xl font-bold mt-4">{featuredProduct.name}</h2>
//           <p className="mt-2 text-gray-700">{featuredProduct.description}</p>
//           <p className="mt-4 text-lg font-semibold text-green-600">Price: ${featuredProduct.price}</p>
//         </div>
//       </div>

//       {/* Other Products */}
//       <div>
//       <div className="other-products mt-12">
//         <h2 className="text-xl font-bold mb-6">Other Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {otherProducts.map((product, index) => (
//             <div
//               key={index}
//               className="product-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Image
//                 src={`/${product.image}`}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="mx-auto"
//               />
//               <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//               <p className="text-green-600 mt-2">Price: ${product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProductPage;








// interface Product{
//   name:string,
//   image:string,
//   price:number,
// }
// interface ProductPageProps{
//   featuredProduct:Product 
//   otherProducts:Product[]
// }

// export default function SingleProductPage({
//     featuredProduct, otherProducts } :ProductPageProps)
//     {}
//   return (
//     <div className="container mx-auto p-6">
//       {/* Featured Product */}
//       <div className="featured-product bg-gray-100 p-6 rounded-lg shadow-md">
//         <div className="text-center">
//           <Image
//             src={`/${featuredProduct.image}`}
//             alt={featuredProduct.name}
//             width={500}
//             height={500}
//             className="mx-auto"
//           />
//           <h2 className="text-2xl font-bold mt-4">{featuredProduct.name}</h2>
//           <p className="mt-2 text-gray-700">{featuredProduct.description}</p>
//           <p className="mt-4 text-lg font-semibold text-green-600">Price: ${featuredProduct.price}</p>
//         </div>
//       </div>

//       {/* Other Products */}
//       <div className="other-products mt-12">
//         <h2 className="text-xl font-bold mb-6">Other Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {otherProducts.map((_Products: unknown,index: Key | null | undefined) => (
//             <div
//               key={index}
//               className="product-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Image
//                 src="/"
//                 alt={Products.name}
//                 width={200}
//                 height={200}
//                 className="mx-auto"
//               />
//               <h3 className="text-lg font-semibold mt-4">{products.name}</h3>
//               <p className="text-green-600 mt-2">Price: ${products.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

 


