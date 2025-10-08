

export default function Contact(){
    return(
        <>
        <header className="bg-[url(https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg)] bg-blend-overlay bg-[#5e5959] h-[270px] lg:h-[500px] bg-center bg-cover flex flex-col gap-5 items-center justify-center ">
            <h6 className="text-white text-xl font-serif  ">Get In Touch</h6>
            <h1 className="text-3xl text-white font-serif uppercase lg:text-[65px]">Contact Us</h1>
        </header>
        <section className="flex flex-col md:flex-row justify-center gap-12 py-20 ">
            <div className="flex flex-col  md:w-1/4 px-2 gap-[40px] py-12 items-center  ">
                <h1 className="font-serif text-4xl">
                    Message Us
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orc
                </p>
                <ul className="menu">
                    <p className="hover:text-amber-500 cursor-pointer"><i className="fa fa-location"></i> 123 Fifth Avenue, New York, NY 10160s</p>
                    <p className="hover:text-amber-500 cursor-pointer"><i className="fa fa-envelope"></i> contact@info.com</p>
                    <p className="hover:text-amber-500 cursor-pointer"><i className="fa fa-phone"></i> 9-334-7565-9787</p>
                </ul>
            </div>
            <form action="" className="md:w-1/3 bg-[#f3ede89e] p-10 h-[400px]  ">
            <input type="text" className="w-1/2 bg-white   p-2 mr-2  " placeholder="First Name" name="" id="fnam" />
            <input type="text" className="w-[46%] bg-white   p-2  " placeholder="Last Name" name="" id="lname" />
            <input type="email" className="w-full bg-white   p-2 my-5" placeholder="Email " name="" id="email" />
            <textarea name="" className="w-full h-[90px] bg-white my-5" id="textarea"></textarea>
            <button className="btn btn-outline btn-lg">Send</button>
            </form> 
        </section>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom" bis_size="{&quot;x&quot;:0,&quot;y&quot;:1131,&quot;w&quot;:1897,&quot;h&quot;:500,&quot;abs_x&quot;:0,&quot;abs_y&quot;:1131}" bis_id="fr_sb6syt6qo1risjnrdx47ra" bis_depth="0" bis_chainid="1" className="w-full h-[300px] md:h-[500px]"></iframe>
        </>
    )
}