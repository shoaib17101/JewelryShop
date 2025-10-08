import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg)] bg-center bg-cover lg:h-[773px] h-[550px] flex flex-col md:items-center ">
        <div className="flex flex-col gap-5 h-full p-2 justify-center w-9/12 lg:gap-8 ">
          <h6 className="font-bold font-serif text-[15px]">New Collection</h6>
          <h1 className="font-serif text-[30px] lg:text-[65px] uppercase font-light lg:w-[50%]">The New Ring Sensation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae
          </p>
          <button className="btn btn-outline btn-lg uppercase w-[150px]"><Link to='shop'>Shop Now</Link></button>
        </div>
      </section>
      <section className='py-[50px] md:flex flex-col items-center'>
        <h6 className="font-serif text-lg text-center">Popular Products</h6>
        <h1 className="font-serif text-3xl text-center pt-5 uppercase">Trending Now</h1>
        <div className="grid grid-cols-2 p-3 gap-3 md:grid-cols-4 gap-y-10  md:items-center md:w-full lg:w-[80%] mt-10 ">
          <div className="card  w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-b-600x750.jpg)] bg-cover bg-center order-2  h-[220px] md:h-[400px] hover:bg-left">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
              <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6 className=''>100$</h6>
              </div>
            </div>

          </div>
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-600x750.jpg)] bg-cover bg-center order-4 h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
                <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>130$</h6>
              </div>
            </div>

          </div>
          
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-b-600x750.jpg)] bg-cover bg-center h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
                <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>150$</h6>
              </div>
            </div>

          </div>
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-600x750.jpg)] bg-cover bg-center h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
             <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>120$</h6>
              </div>
            </div>
              </div>
        </div>
      </section>
      <section className='py-[50px] md:flex flex-col items-center'>
        <h6 className="font-serif text-lg text-center">Shop </h6>
        <h1 className="font-serif text-3xl text-center pt-5 uppercase">Best  Selling</h1>
        <div className="grid grid-cols-2 p-3 gap-3 md:grid-cols-4 gap-y-10  md:items-center md:w-full lg:w-[80%]  mt-20 ">
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-b-600x750.jpg)] bg-cover bg-center  h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
              <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6 className=''>100$</h6>
              </div>
            </div>

          </div>
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-600x750.jpg)] bg-cover bg-center h-[220px] md:h-[400px]">
             <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
                <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>150$</h6>
              </div>
            </div>

             
          </div>
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-b-600x750.jpg)] bg-cover bg-center h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
                <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>150$</h6>
              </div>
            </div>

          </div>
          <div className="card bg-base-100 w-[100%] shadow-sm bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-600x750.jpg)] bg-cover bg-center h-[220px] md:h-[400px]">

            <div className="card-body justify-between p-2">
              <h1 className="text-lg font-serif">Product Name</h1>
             <div className="card-actions flex justify-between px-1.5  items-center">
                <button className="btn btn-outline btn-sm">Buy Now</button>
                <h6>120$</h6>
              </div>
            </div>
              </div>
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
          <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5lY2tsYWNlfGVufDB8fDB8fHww" className='img md:max-w-[550px] md:h-[550px] md:hidden lg:inline-block ' alt="" />
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
