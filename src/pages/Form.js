import {React,useContext,useState} from 'react'
import { contextHandel } from '../Context';

function Form() {
    const [name,setName]=useState("");
    const [username,setUserName]=useState("");
    const [work,setWork]=useState("");
    const [company,setCompany]=useState("");

    const {mode} = useContext(contextHandel);

const handleSubmit =(e)=>{
    e.preventDefault();
    fetch("http://localhost:8000/blogs",{
        method: 'POST',
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({
          name: name,
          username: username,
          work:work,
          company:company
        })
      })

}
 


  return (
    <div className={mode ? "w-100 vh-100" : 'w-100 vh-100 dark-mode'}>
    <form className={mode ? 'form-control w-50 m-auto bg-primary ': 'form-control w-50 m-auto  dark-mode'} onSubmit={handleSubmit}>
        <label> Name</label>
        <input onChange={(e)=>setName(e.target.value)} className='form-control' />

        <label className='mt-2' > Username</label>
        <input onChange={(e)=>setUserName(e.target.value)} className='form-control' />

        <label className='mt-2'> Work</label>
        <input onChange={(e)=>setWork(e.target.value)} className='form-control' />

        <label className='mt-2'> Company</label>
        <input onChange={(e)=>setCompany(e.target.value)} className='form-control' />

        <button className='btn btn-warning w-100 mt-3' type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Form