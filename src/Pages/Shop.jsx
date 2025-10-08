import { useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  // Example product data (you can replace with real data)
  const products = [
    {
      id: 1,
      name: "Bracelet",
      price: 150,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-400x500.jpg",
    },
    {
      id: 2,
      category:'earrings',
      name: "Earrings",
      price: 500,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-400x500.jpg",
    },
    {
      id: 3,
      category:'earrings',
      name: "Earrings",
      price: 900,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a-400x500.jpg",
    },
    {
      id: 4,
      category:'earrings',
      name: "Earrings",
      price: 1500,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a-400x500.jpg",
    },
    {
      id: 5,
      name: "Necklace",
      price: 4200,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a-400x500.jpg",
    },
    {
      id: 6,
      name: "Necklace",
      price: 2500,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-a-400x500.jpg",
    },
    {
      id: 7,
      name: "Necklace",
      price: 2000,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-a-400x500.jpg",
    },
    {
      id: 8,
      name: "Necklace",
      price: 1000,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a-400x500.jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
        <section>
        <h1 className="font-serif text-5xl text-center my-6">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:w-[80%] mx-auto px-2">
          {products.map((product) => (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="card h-[320px] md:h-[400px] flex flex-col cursor-pointer hover:shadow-lg transition"
            >
              <figure className="h-[180px] md:h-full flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body justify-between p-2 flex-1 flex flex-col">
                <h1 className="text-lg font-serif card-title text-center">{product.name}</h1>
                <div className="card-actions flex flex-col gap-1.5 items-center mt-auto">
                  <h6>{product.price}$</h6>
                  <button
                    className="btn btn-outline btn-sm w-full"
                    onClick={e => { e.preventDefault(); handleAddToCart(product); }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}