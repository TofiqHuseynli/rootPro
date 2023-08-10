import React, { useContext ,useEffect,useRef} from 'react'
import "../style/side.css"
import {BsSun} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'
import { contextHandel } from '../Context'
import {FaCheck} from 'react-icons/fa'


function Side({onClose,toogleRef,modeRef}) {
 
 const {lightFunc,darkFunc,mode} = useContext(contextHandel);
 


useEffect(() => {
  function handleClickOutside(event) {
      if ( toogleRef.current && !toogleRef.current.contains(event.target) && !modeRef.current.contains(event.target)){
        onClose();
      }
  }

  // Bind the event listener
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
  };
}, [toogleRef]);
    
  
  return (
    <div ref={toogleRef}  className='side'>
    <h4>Switch theme</h4>
    <div className='buttons'>
        <div className='light-them'>
        <button onClick={lightFunc}><span><BsSun/></span><p>Light mode</p></button><span className='check'>{mode && <FaCheck/> }</span>
        </div>
        <div className='dark-them'>
        <button onClick={darkFunc}><span><BsFillMoonFill/></span><p>Dark mode</p></button><span className='check'>{!mode && <FaCheck/>}</span>
        </div>
    </div>
    </div>
  )
}

export default Side