import { Link } from "react-router-dom";

export default function Home() {
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
  return (
    <>
      <section className="bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg)] bg-center bg-cover lg:h-[773px] h-[550px] flex flex-col md:items-center ">
        <div className="flex flex-col gap-5 h-full p-2 justify-center w-9/12 lg:gap-8 ">
          <h6 className="font-bold font-serif text-[15px]">New Collection</h6>
          <h1 className="font-serif text-[30px] lg:text-[65px] uppercase font-light lg:w-[50%]">The New Ring Sensation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae
          </p>
          <button className="btn btn-outline btn-lg uppercase w-[150px]">
            <Link to='/shop'>Shop Now</Link>
          </button>
        </div>
      </section>
    
  <section className="flex flex-col justify-center py-10 gap-5 flex-wrap"> 
      <h1 className="text-4xl font-serif py-10 text-center">Now Trending</h1>
      <div className="flex  justify-center py-10 gap-5 flex-wrap">

            {products.map((product=>{
          
          if(product.name==='Necklace')
            return(
        
          <div className="card  shadow flex flex-col items-around p-1.5" key={product.id}>
            <img src={product.image} alt="" />
            <h1 className="font-serif text-[22px]">{product.name} </h1>
            <h1 className="font-serif text-[18px]">{product.category} </h1>
            <div className="card-actions flex flex-col  justify-between gap-3 ">
            <h1>{product.price} </h1>
              <button className="btn btn-outline">Add To Cart <i className="fa fa-shopping-cart"></i> </button>
            </div>
          </div>

            )
         }))}
      </div>
          </section>
      <section>
        <div className="flex md:justify-center md:items-center p-5 md:flex-row flex-col">
          <div className="md:w-[20%] flex flex-col gap-5">
            <h6 className='font-serif text-lg font-extralight'> Unique Pieces</h6>
            <h1 className="text-4xl font-serif uppercase">Be always on trend</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            <button className="btn btn-outline uppercase w-[120px]">Shop Now</button>
          </div>
          <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-02.jpg" className=' md:max-w-[330px]  relative md:left-[5%] lg:left-[10%] h-[350px] mt-3' alt="" />
          <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5lY2tsYWNlfGVufDB8fDB8fHww" className='img md:max-w-[550px] md:h-[650px] md:hidden lg:inline-block ' alt="" />
        </div>
      </section>
      <section className='flex flex-col md:items-center '>
        <div className="flex flex-col lg:w-1/2 p-3 gap-5 items-center">
          <h6 className='font-serif self-start md:self-center'>best in business</h6>
          <h2 className="text-[25px] font-serif self-start md:self-center ">Why Choose Us</h2>
          <h4 className="font-serif text-[25px]  md:text-center md:text-[40px]">Cras malesuada dolor sit amet est egestas ullamcorper.
            Nullam in tortor mi. Maecenas vulputate libero</h4>
        </div>
        <div className="flex justify-around lg:w-[80%] gap-8 pt-5 md:flex-row flex-col p-5">
          <div>
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-04.png" alt="" />
            <h1 className='font-serif text-xl mt-5'>Big Discounts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam minus totam.</p>
          </div>
          <div>
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-01.png" alt="" />
            <h1 className='font-serif text-xl mt-5'>Free Shipping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam minus totam.</p>
          </div>
          <div>
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-02.png" alt="" />
            <h1 className='font-serif text-xl mt-5'>Secure Payments</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam minus totam.</p>
          </div>
          <div>
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-03.png" alt="" />
            <h1 className='font-serif text-xl mt-5'>Order Tracking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam minus totam.</p>
          </div>
        </div>
      </section>
    </>
  )
}