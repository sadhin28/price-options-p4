import React from 'react';
import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip } from 'recharts';
const BarCharts = () => {
   const  PhoneData=[
  {
    "id": 1,
    "name": "Galaxy S22",
    "brand": "Samsung",
    "price": 799,
    "stock": 45
  },
  {
    "id": 2,
    "name": "iPhone 14",
    "brand": "Apple",
    "price": 999,
    "stock": 30
  },
  {
    "id": 3,
    "name": "Pixel 7",
    "brand": "Google",
    "price": 699,
    "stock": 25
  },
  {
    "id": 4,
    "name": "Redmi Note 12",
    "brand": "Xiaomi",
    "price": 299,
    "stock": 60
  },
  {
    "id": 5,
    "name": "OnePlus 11",
    "brand": "OnePlus",
    "price": 729,
    "stock": 40
  },
  {
    "id": 6,
    "name": "Galaxy A54",
    "brand": "Samsung",
    "price": 449,
    "stock": 55
  },
  {
    "id": 7,
    "name": "iPhone SE",
    "brand": "Apple",
    "price": 429,
    "stock": 35
  },
  {
    "id": 8,
    "name": "Realme GT Neo 3",
    "brand": "Realme",
    "price": 499,
    "stock": 50
  },
  {
    "id": 9,
    "name": "Motorola Edge 30",
    "brand": "Motorola",
    "price": 599,
    "stock": 20
  },
  {
    "id": 10,
    "name": "Infinix Zero 5G",
    "brand": "Infinix",
    "price": 289,
    "stock": 65
  }
]

    return (
        <div className='font-black'>
            <BarChart className='rounded-2xl bg-black p-10' width={430} height={350} data={PhoneData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke="#ccc" />
                <Bar dataKey='stock' barSize={30} fill="#C51095FF" ></Bar>
                <Bar dataKey='price' barSize={30} fill="#DEC616FF" ></Bar>
                
            </BarChart>
        </div>
    );
};

export default BarCharts;