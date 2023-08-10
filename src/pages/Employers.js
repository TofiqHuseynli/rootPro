import React, { useContext, useState } from "react";
import "../style.css";
import Add from "../components/Add";
import { contextHandel } from "../Context";



function Employers() {
  const [employer, setEmployers] = React.useState([]);

  const {check,setCheck,mode}=useContext(contextHandel);

 
  const [checked,setChecked] = useState([]);

  

  const chooseFunc = (e)=>{
    
      if(e.target.checked){
        setChecked([...checked, e.target.id]);
      }else{
        let newChecked = checked
        setChecked(newChecked.filter((item)=>item !== e.target.id))
      }
    }



    // Test Are

   


    // Are End 
   
  

  console.log(checked);



  

  const checkAppear = ()=>{
    setCheck(check ? false : true);
  }

  const data = async () => {
    const eployers = await fetch(" http://localhost:8000/blogs");
    const eployers2 = await eployers.json();

    if (eployers.status == 200 && eployers.ok){
      setEmployers(eployers2);
    } else {
    }
  };

  React.useEffect(() => {
    data();
  }, []);

  
    async function handleDelete(id){
      await fetch(`http://localhost:8000/blogs/${id}`,
      {method: 'DELETE'});
      data()
    }

  

    async function handleMultiDelete(){
      for(let i=0; i< checked.length; i++ ){
        let num = checked[i];
        await fetch(`http://localhost:8000/blogs/${num}`,
        {method: 'DELETE'});
        data()
      }
    
      
    }
 

  return (
    <>
    <div className={mode ? "w-100 vh-100" : "w-100 vh-100 dark-mode" }>
      <Add data={data} checkAppear={checkAppear} employer={employer} handleDelete={handleDelete}  handleMultiDelete={handleMultiDelete}/>
      <table >
        <tr className="head">
          <th className={check ? "visible" : "unvisible"} ></th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>

        {employer.map((item, key) => (
          <>
          <tr className={mode ? "elements" : "dark"} key={item.id}>
            <td className={check ? "visible" : "unvisible"} ><input onChange={chooseFunc} id={item.id}  type="checkbox"></input></td>
            <td>{item.name} </td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td className="btn-data"><button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Del</button></td>
          </tr>
          </>
        ))}
      </table>
      </div>
    </>
  );
}

export default Employers;
