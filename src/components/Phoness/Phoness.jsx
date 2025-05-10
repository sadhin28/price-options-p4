import axios from "axios";

import { useEffect, useState } from "react";
import { Bar, BarChart,XAxis ,YAxis,Tooltip } from "recharts";

const Phoness = () => {
     const [phone , setPhone]= useState([]);
          const [loadings,setloadings]=useState(true)
    useEffect(()=>{
    //    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //    .then(res => res.json())
    //    .then(phoneData=> setPhone(phoneData.data))
     axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
     .then(data=>{
        const phoneData = data.data.data;
        const phonewitfakehData = phoneData.map(phones=>{
            const obj ={
                name: phone.phone_name,
                price: parseInt(phones.slug.split('-')[1])
            }
            return obj
        })
        setloadings(false)
        setPhone(phonewitfakehData)
        
     })
     
    }, [])
    

    return (
        <div>
             {
                loadings &&  <span class="loading loading-bars  w-20"></span>
             }
             <h2 className="text-3xl">Phones: {phone.length}</h2>

             <div>
                <BarChart className='rounded-2xl bg-black p-10' width={430} height={350} data={phone}>
                    <XAxis dataKey={''}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey='price' fill="#C51095FF"></Bar>
                    
                </BarChart>
             </div>
        </div>
    );
};

export default Phoness;