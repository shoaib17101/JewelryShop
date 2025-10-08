import { useParams, Link } from "react-router-dom";

// Copy the same products array here or import it from a shared file
const products = [
  {
    id: 1,
    name: "Bracelet",
    price: 150,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-400x500.jpg",
  },
  {
    id: 2,
    category: 'earrings',
    name: "Earrings",
    price: 500,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-400x500.jpg",
  },
  {
    id: 3,
    category: 'earrings',
    name: "Earrings",
    price: 900,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a-400x500.jpg",
  },
  {
    id: 4,
    category: 'earrings',
    name: "Earrings",
    price: 1500,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a-400x500.jpg",
  },
  {
    id: 5,
    name: "Necklace",
    price: 4200,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a-400x500.jpg",
  },
  {
    id: 6,
    name: "Necklace",
    price: 2500,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-a-400x500.jpg",
  },
  {
    id: 7,
    name: "Necklace",
    price: 2000,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-a-400x500.jpg",
  },
  {
    id: 8,
    name: "Necklace",
    price: 1000,
    image: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a-400x500.jpg",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  // Find related products (same category, not the current product)
  const related = products.filter(
    (p) =>
    
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <>   
    <div className="flex w-1/2 gap-4 p-5 mx-auto">
      <img src={product.image} alt={product.name} className="w-1/2 rounded shadow mb-4" />
      <div className="flex flex-col gap-5 items-start">
      <h1 className="text-2xl font-serif mb-2">{product.name}</h1>
      <p className="text-lg mb-4">{product.price}$</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis corporis fugit hic ipsum 
        ad dignissimos nam ipsa voluptatum, repellendus inventore. Numquam consectetur ex autem 
        ad dignissimos nam ipsa voluptatum, repellendus inventore. Numquam consectetur ex autem 
        ad dignissimos nam ipsa voluptatum, repellendus inventore. Numquam consectetur ex autem 
        repudiandae odio ipsam blanditiis in possimus.</p>
      <button className="btn btn-outline mb-8">Add To Cart</button>

      </div>
      </div>

      {related.length > 0 && (
        <div >
          <h2 className="text-5xl font-serif my-5 text-center">Related Products</h2>
          <div className="flex  gap-4 items-center">
            {related.map((rel) => (
              <Link to={`/shop/${rel.id}`} key={rel.id} className="block  rounded p-2 hover:shadow">
                <img src={rel.image} alt={rel.name} className="w-full h-[300px] object-cover rounded mb-2" />
                <div className="text-center">
                  <div className="font-serif">{rel.name}</div>
                  <div className="text-sm">{rel.price}$</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}