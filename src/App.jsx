import './App.css'
import Mynavbar from './components/Navbar/Mynavbar/Mynavbar'
import Navbar from './components/Navbar/Navbar'
import { BiAlignLeft } from "react-icons/bi";
function App() {
 

  return (
    <div className='mx-5 lg:bg-amber-600 bg-amber-600  '>
       {/* <Navbar></Navbar> */}
       <Mynavbar></Mynavbar>
    </div>
  )
}

export default App
