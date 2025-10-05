import { useState } from "react";

export default function Test() {
  const [cart, setCart] = useState([]);

  // Example product data
  const products = [
    {
      id: 1,
      name: "Earrings",
      price: 100,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-b-600x750.jpg",
    },
    {
      id: 2,
      name: "Bracelet",
      price: 130,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-600x750.jpg",
    },
    {
      id: 3,
      name: "Earrings",
      price: 150,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-b-600x750.jpg",
    },
    {
      id: 4,
      name: "Earrings",
      price: 120,
      image:
        "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-600x750.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <section className="bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg)] bg-center bg-cover lg:h-[773px] h-[550px] flex flex-col md:items-center ">
        <div className="flex flex-col gap-5 h-full p-2 justify-center w-9/12 lg:gap-8 ">
          <h6 className="font-bold font-serif text-[15px]">New Collection</h6>
          <h1 className="font-serif text-[30px] lg:text-[65px] uppercase font-light lg:w-[50%]">
            The New Ring Sensation
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae
          </p>
          <button className="btn btn-outline btn-lg uppercase w-[150px]">
            Shop Now
          </button>
        </div>
      </section>
      <section className="py-[50px] md:flex flex-col items-center">
        <h6 className="font-serif text-lg text-center">Popular Products</h6>
        <h1 className="font-serif text-3xl text-center pt-5 uppercase">
          Trending Now
        </h1>
        <div className="grid grid-cols-2 p-3 gap-3 md:grid-cols-4 gap-y-10  md:items-center md:w-full lg:w-[80%] mt-10 ">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card bg-base-100 w-[100%] shadow-sm bg-[url(${product.image})] bg-cover bg-center h-[220px] md:h-[400px] flex flex-col justify-end`} style={{background:`${product.image}`}}
            >
              <div className="card-body justify-between p-2 bg-white bg-opacity-80">
                <h1 className="text-lg font-serif text-center">{product.name}</h1>
                <div className="card-actions flex justify-between px-1.5 items-center">
                  <button
                    className="btn btn-outline btn-sm flex items-center gap-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                  <h6>{product.price}$</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Display cart items for demo */}
        {cart.length > 0 && (
          <div className="mt-8 w-full md:w-1/2 mx-auto bg-white p-4 rounded shadow">
            <h2 className="font-serif text-xl mb-2">Cart Items</h2>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between py-1 border-b">
                  <span>{item.name}</span>
                  <span>{item.price}$</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      {/* ...rest of your code remains unchanged... */}
    </>
  );
}