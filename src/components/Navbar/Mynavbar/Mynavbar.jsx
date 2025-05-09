import { useLayoutEffect } from "react";
import Link from "../../Link/Link";
import { BiAlignLeft } from "react-icons/bi";
const Mynavbar = () => {
    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/dashboard', name: 'Dashboard' }
];

    return (
        <nav className=" text-2xl">
            <BiAlignLeft className="md:hidden " />
            <ul className="md:flex">

            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Mynavbar;