import { Outlet } from "react-router-dom";
import Features from "./Component/Features";
import Navbar from "./Component/Navbar";
import Priceses from "./Component/Priceses";

function App() {
  return (
     <div>
    <Navbar></Navbar>
     <Outlet></Outlet>
     </div>
  )
}

export default App;
