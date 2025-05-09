import './App.css'
import Mynavbar from './components/Navbar/Mynavbar/Mynavbar'
import Navbar from './components/Navbar/Navbar'
import { BiAlignLeft } from "react-icons/bi";
import Priceoptions from './components/Priceoptions/Priceoptions';
function App() {
 

  return (
    <div className='mx-5  md:text-white'>
      <div className='sticky top-0 lg:bg-gray-600 bg-gray-600  '>
       {/* <Navbar></Navbar> */}
       <Mynavbar></Mynavbar>
       
    </div>
    < Priceoptions></Priceoptions>
    </div>
  )
}

export default App
