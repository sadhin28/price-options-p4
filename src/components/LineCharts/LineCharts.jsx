
import { LineChart, Line , XAxis ,YAxis,CartesianGrid  } from "recharts";

const LineCharts = () => {
    const mathMarks = [
        {
            "id": 1,
            "name": "Alice",
            "math": 78,
            "biology": 82,
            "physics": 75,
            "chemistry": 80,
            "english": 88
        },
        {
            "id": 2,
            "name": "Ben",
            "math": 85,
            "biology": 79,
            "physics": 83,
            "chemistry": 76,
            "english": 81
        },
        {
            "id": 3,
            "name": "Charlie",
            "math": 92,
            "biology": 91,
            "physics": 89,
            "chemistry": 94,
            "english": 86
        },
        {
            "id": 4,
            "name": "Diana",
            "math": 74,
            "biology": 77,
            "physics": 70,
            "chemistry": 72,
            "english": 90
        },
        {
            "id": 5,
            "name": "Ethan",
            "math": 88,
            "biology": 85,
            "physics": 84,
            "chemistry": 87,
            "english": 79
        },
        {
            "id": 6,
            "name": "Fiona",
            "math": 81,
            "biology": 89,
            "physics": 80,
            "chemistry": 82,
            "english": 85
        },
        {
            "id": 7,
            "name": "George",
            "math": 69,
            "biology": 65,
            "physics": 68,
            "chemistry": 70,
            "english": 72
        },
        {
            "id": 8,
            "name": "Hannah",
            "math": 95,
            "biology": 94,
            "physics": 96,
            "chemistry": 93,
            "english": 91
        },
        {
            "id": 9,
            "name": "Ivan",
            "math": 77,
            "biology": 80,
            "physics": 73,
            "chemistry": 75,
            "english": 83
        },
        {
            "id": 10,
            "name": "Julia",
            "math": 84,
            "biology": 86,
            "physics": 85,
            "chemistry": 88,
            "english": 87
        }
    ]
   
    return (
       
          <div>
           
              <div>
                <LineChart className="rounded-2xl bg-black p-10"  width={430} height={350} data={mathMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                <CartesianGrid stroke="#ccc" />
                <Line dataKey='math' stroke="red"></Line>
                <Line dataKey='physics' stroke="Blue"></Line>
                <Line dataKey='english' stroke="green"></Line>
                <Line dataKey='biology' stroke="yellow"></Line>
                <Line dataKey='chemistry'stroke="black"></Line>
            </LineChart>
            </div>
          </div>
       
    );
};

export default LineCharts;