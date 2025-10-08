import { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link

export default function Header() {
    const [open, setOpen] = useState(false)

    const Menu = (
        <div className={`off-canvas w-full lg:hidden ${open ? 'block' : 'hidden'} absolute bg-white`}>
            <ul className="list-none gap-5 uppercase text-[15px] flex flex-col p-3 w-full">
                <li><Link to="/rings" className='hover:text-amber-500 cursor-pointer  text-[20px] p-3'>Rings</Link></li>
                <li><Link to="/bracelets" className='hover:text-amber-500 cursor-pointer  text-[20px] p-3'>Bracelets</Link></li>
                <li><Link to="/earrings" className='hover:text-amber-500 cursor-pointer  text-[20px] p-3'>earRings</Link></li>
                <li><Link to="/necklaces" className='hover:text-amber-500 cursor-pointer  text-[20px] p-3'>necklaces</Link></li>
            </ul>
        </div>
    )

    return (
        <>
            <nav className="navbar navbar-lg bg-transparent shadow-md flex justify-between lg:justify-center p-3 lg:gap-[13%] h-[90px] relative">
                <ul className="list-none hidden gap-5 uppercase text-[15px] md:flex ">
                    <li><Link to="/rings" className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>Rings</Link></li>
                    <li><Link to="/bracelets" className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>Bracelets</Link></li>
                    <li><Link to="/earrings" className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>earRings</Link></li>
                    <li><Link to="/necklaces" className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>necklaces</Link></li>
                </ul>
                <div>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-retina.png" className='w-[100px]' alt="" />
                </div>
                <div>
                    <h1 className='text-4xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>&#8801;</h1>
                </div>
                <div className="md:flex gap-2 hidden relative">
                    <ul className='list-none flex gap-4'>
                        <li><Link to="/" className='hover:text-amber-500'>Home</Link></li>
                        <li><Link to="/about" className='hover:text-amber-500'>About</Link></li>
                        <li><Link to="/contact" className='hover:text-amber-500'>Contact</Link></li>
                        <li><Link to="/search" className='hover:text-amber-500'><i className="fa fa-search"></i></Link></li>
                        <li><Link to="/cart" className='hover:text-amber-500'><i className="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
            </nav>
            {Menu}
        </>
    )
}