import React from 'react';

const Link = ({route}) => {
    return (
        <li className="  md:mr-6   rounded-2xl gird text-center p-2 grid justify-center items-center hover:bg-amber-950 hover:text-white " >

        <a href={route.path}>{route.name}</a>
        
        </li>
    );
};

export default Link;