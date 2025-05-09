import { MdSportsGymnastics } from "react-icons/md";
const PriceOption = ({option}) => {
     const {name,id,price,features}=option;
   
    return (
        <div className='text-center flex flex-col  text-white bg-blue-600 border rounded-2xl p-4 '>
            <h2 className="">
                 <span className='text-5xl'>{price}</span>
                 <span className='text-2xl'>/mon</span>
            </h2> <br />
            <h4 className='text-3xl'>{name}</h4>
            <div className="divider "></div>
        
             <div className="flex-grow">
                 {
                  features.map(f=><p className="flex flex-grow items-center gap-2"><MdSportsGymnastics />{f}</p>)
                }

                
             </div>

              <div className="mt-5 mb-5 ">
                 <button className="btn bg-green-700 w-full border-none  text-2xl p-6 text-white rounded-4xl hover:bg-green-900">Buy Now</button>
             </div>
           
        </div>
    );
};

export default PriceOption;