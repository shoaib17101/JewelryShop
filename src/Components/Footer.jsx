import {Link} from 'react-router-dom'
export default function Footer() {

    return (
        <>
            <footer className="w-full shadow-cyan-950 shadow-lg bg-[#f3ede89e] p-10">
                <div className="md:flex-row flex lg:items-start w-full md:justify-center md:items-start lg:px-42 gap-20 flex-col items-center" >
                    <div className="w-1/4">
                        <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-retina.png" className='w-[100px] h-[50px]' alt="" />
                    </div>
                    <div className="lg:w-1/4">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <ul className="font-light text-[15px] py-4 px-0 flex flex-col  gap-2">
                            <li ><Link to="/">Home</Link></li>
                            <li ><Link to='/about'>About</Link></li>
                            <li ><Link to='/contact'>Contact</Link></li>

                        </ul>

                    </div>
                    <div className="lg:w-1/4">
                        <h2 className="text-lg font-bold">Shop</h2>
                        <ul className=" gap-2 py-4 px-0 capitalize text-[15px] flex flex-col">
                            <li><a href="#"  className='hover:text-amber-500 cursor-pointer '>Rings</a> </li>
                            <li><a href="#"  className='hover:text-amber-500 cursor-pointer '>Bracelets</a> </li>
                            <li><a href="#"  className='hover:text-amber-500 cursor-pointer '>earrings</a> </li>
                            <li><a href="#"  className='hover:text-amber-500 cursor-pointer '>necklaces</a> </li>
                        </ul>
                    </div>
                    <div className=" lg:w-1/4 flex flex-col items-center lg:items-start">
                        <h2 className="text-lg font-bold text-center ">Address</h2>
                        <p className='pt-5 text-center lg:text-start'> 123 Fifth Avenue, New York, <br />
                            NY 10160 <br />
                            contact@info.com <br />
                            929-242-6868</p>
                    </div>

                </div>
            </footer>
        </>
    )
}