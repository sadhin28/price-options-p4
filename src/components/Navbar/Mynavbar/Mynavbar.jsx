import { useState } from "react";
import Link from "../../Link/Link";
import { BiAlignLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const Mynavbar = () => {
    const [open,setopen]=useState(false)
    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/dashboard', name: 'Dashboard' }
];

    return (
      <div>
        
          <nav className="py-5">
           <div className="md:hidden " onClick={()=>setopen(!open)}>
               {
                 open == true?<IoMdClose className="text-4xl" />:<BiAlignLeft className="text-4xl"/>
               }
               
           </div>
            <ul className={`px-3 ml-3 font-bold justify-end py-4 md:py-0 md:flex md:duration-initial rounded-2xl md:static duration-1000 md:duration-0 absolute md:top-0 ${open ? ' top-20':'-top-1600'} md:bg-transparent md:w-full bg-amber-300 w-110  `}>

            {
             routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
        
      </div>
    );
};

export default Mynavbar;