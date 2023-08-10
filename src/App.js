import { Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Employers from "./pages/Employers";
import Form from "./pages/Form";
import Context, { contextHandel } from "./Context";
import { useContext, useRef } from "react";

function App() {
  const rootAppplay = [
    {path:'/home',element:<Home/>,name:'Home'},
    {path:'/users',element:<Users/>,name:'Users'},
    {path:'/employees',element:<Employers/>,name:'Employees'},
    {path:'/form',element:<Form/>,name:'Form'}
  ]
  
  


  

 
  return (
    <div >
      <Context>
    <Navbar rootAppplay={rootAppplay} />
      
      <Routes>
        {rootAppplay.map((item)=>(
          <Route path={item.path} element={item.element}/>
        ))};
      </Routes>
      </Context>
      

     
      
    
    </div>
    
  );
}

export default App;
