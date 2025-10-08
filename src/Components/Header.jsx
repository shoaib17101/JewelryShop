import { useState } from 'react'
import { Link } from 'react-router-dom' 

export default function Header() {
    const [open, setOpen] = useState(false)

        const Menu=(
            <>
              <ul className={`menu ${open ? 'block' : 'hidden'}`}>
                        <li><Link to="/" className='hover:text-amber-500'>Home</Link></li>
                        <li><Link to="/about" className='hover:text-amber-500'>About</Link></li>
                        <li><Link to="/contact" className='hover:text-amber-500'>Contact</Link></li>
                        <li><Link to="/shop" className='hover:text-amber-500'>Shop</Link></li>
                        <li><Link to="/search" className='hover:text-amber-500'><i className="fa fa-search"></i></Link></li>
                        <li><Link to="/cart" className='hover:text-amber-500'><i className="fa fa-shopping-cart"></i></Link></li>
                    </ul>
       
            </>
        )

    return (
        <>
            <nav className="navbar navbar-lg bg-transparent shadow-md flex justify-between lg:justify-center p-3 lg:gap-[13%] h-[90px] relative">
             
                <div>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-retina.png" className='w-[100px] order-1' alt="" />
                </div>
                <div>
                    <h1 className='text-4xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>&#8801;</h1>
                </div>
                <div className="md:flex hidden gap-2  relative order-3">
                    <ul className='list-none flex gap-4'>
                        <li><Link to="/" className='hover:text-amber-500'>Home</Link></li>
                        <li><Link to="/about" className='hover:text-amber-500'>About</Link></li>
                        <li><Link to="/contact" className='hover:text-amber-500'>Contact</Link></li>
                        <li><Link to="/shop" className='hover:text-amber-500'>Shop</Link></li>
                        <li><Link to="/search" className='hover:text-amber-500'><i className="fa fa-search"></i></Link></li>
                        <li><Link to="/cart" className='hover:text-amber-500'><i className="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
            </nav>
            {Menu}
        </>
    )
}