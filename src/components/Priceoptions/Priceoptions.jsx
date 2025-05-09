import PriceOption from "../PriceOption/PriceOption";
const Priceoptions = () => {
  const priceOptions =   [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to cardio and strength equipment",
                "Locker room and showers",
                "Free parking",
                "1 fitness assessment per year"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "All Basic Plan features",
                "Group fitness classes (yoga, Zumba, HIIT)",
                "Towel service",
                "Spinning classes",
                "Free Wi-Fi",
                "2 guest passes per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "All Standard Plan features",
                "24/7 gym access",
                "Monthly personal trainer session",
                "Nutrition consultation",
                "Sauna and steam room access",
                "Massage chair access",
                "Unlimited guest access"
            ]
        },
        {
            "id": 4,
            "name": "Student Plan",
            "price": 24.99,
            "features": [
                "Full gym access during off-peak hours",
                "Group fitness classes",
                "Locker access",
                "Valid student ID required",
                "1 guest pass per month"
            ]
        },
        {
            "id": 5,
            "name": "Family Plan",
            "price": 109.99,
            "features": [
                "Up to 4 family members",
                "All Premium Plan features",
                "Free kids’ fitness programs",
                "Weekend family classes",
                "Kids’ zone access",
                "Family locker rooms"
            ]
        }
    ]

    return (
        <div className="">
          
                  <h2 className=" font-black mdtext-5xl text-3xl mt-5 md:mt-10 text-balance md:text-black">Best Prices in the town</h2>
               <div className=" mb-10 font-bold mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {
                    priceOptions.map(option=><PriceOption option={option}></PriceOption>)
                 }
               </div>
        </div>
    );
};

export default Priceoptions;