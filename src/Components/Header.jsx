import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    const Menu = (
        <div className={`off-canvas w-full lg:hidden ${open ? 'block' : 'hidden'} absolute   bg-white`}>
            <ul className="list-none gap-5 uppercase text-[15px] flex flex-col p-4">
                <li className='hover:text-amber-500 cursor-pointer shadow-sm text-[20px] p-3'>Rings</li>
                <li className='hover:text-amber-500 cursor-pointer shadow-sm text-[20px] p-3'>Bracelets</li>
                <li className='hover:text-amber-500 cursor-pointer shadow-sm text-[20px] p-3'>earRings</li>
                <li className='hover:text-amber-500 cursor-pointer shadow-sm text-[20px] p-3'>necklaces</li>
            </ul>
        </div>
    )

    return (
        <>
            <nav className="navbar navbar-lg bg-transparent shadow-md flex justify-between lg:justify-around p-3 h-[90px] relative">
                <ul className="list-none hidden gap-5 uppercase text-[15px] lg:flex">
                    <li className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>Rings</li>
                    <li className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>Bracelets</li>
                    <li className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>earRings</li>
                    <li className='hover:text-amber-500 cursor-pointer hover:border-t-1 border-amber-500'>necklaces</li>
                </ul>
                <div className="w-[100px]">
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-retina.png" className='w-[100px]' alt="" />
                </div>
                <div>
                    <h1 className='text-4xl lg:hidden cursor-pointer' onClick={() => setOpen(!open)}>&#8801;</h1>
                </div>
                <div className="lg:flex gap-2 hidden relative">
                    <ul className='list-none flex gap-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><i className="fa fa-search"></i></li>
                        <li><i className="fa fa-shopping-cart"></i></li>
                    </ul>
                </div>
            </nav>
            {Menu}
        </>
    )
}