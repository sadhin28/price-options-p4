
const PriceOption = ({option}) => {
     const {name,id,price,features}=option;
    return (
        <div className='bg-gray-300 border rounded-2xl p-4 '>
            <h2>
                 <span className='text-5xl'>{price}</span>
                 <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className="divider"></div>
        
               <p className="text-justify">{features}f</p>
           
        </div>
    );
};

export default PriceOption;