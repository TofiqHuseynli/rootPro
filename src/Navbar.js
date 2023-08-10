import React,{ useEffect, useRef,useState } from 'react'
import { useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { contextHandel } from './Context';
import "./style/navbar.css";
import Side from './components/Side';

function Navbar({rootAppplay}) {
    const {mode} = useContext(contextHandel);
    const location = useLocation();
    const toogleRef = useRef();
    const modeRef = useRef();


    const [dropdownShow,setDropdownShow] = useState(false);

    const onClose = ()=>{
      setDropdownShow(false)
    }

    const toggleFunc=()=>{
      setDropdownShow(!dropdownShow)
    }
   


    

  

    
  return (
    <>
    {dropdownShow && <Side toogleRef={toogleRef} onClose={onClose} modeRef={modeRef} />}
  
    <div>
      
        <nav className={mode ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-dark" }>
  <div className="container-fluid">
    <a className={mode ? "navbar-brand" : "navbar-brand dark-mode-nav"} href="#">RootPro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  " >
      {rootAppplay.map((item)=>(
         <li className={location.pathname == item.path ? "nav-item active" : "nav-item"}>
         <Link className={mode ? "nav-link" : "nav-link dark-mode-nav"} to={item.path}>{item.name}</Link>
       </li>
        ))}
      </ul>
      <form className="d-flex">
        <input className={mode ? "form-control me-2" : "form-control me-2 dark-mode"} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <div className='mode-btn'>
        <button 
         className='btn btn-info mx-2' type='button' ref={modeRef} onClick={toggleFunc}>Mode</button>
        </div>
        
      </form>
    </div>
  </div>
</nav>
      
    </div>
    </>
  )
}

export default Navbar
