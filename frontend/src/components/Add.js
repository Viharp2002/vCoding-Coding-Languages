import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Add = () => {

    const usNavigate = useNavigate();

    const[lang,setLang] = useState({
        lname:"",lshort:"",ldate:"",ldesc:"",llink:""
    })

    let namevihar,valuevihar;
    const handleLang = (e)=>{
        namevihar = e.target.name;
        valuevihar = e.target.value;

        setLang({...lang,[namevihar]:valuevihar});
    }

    const postData = async(e)=>{
        e.preventDefault();

        const{lname,lshort,ldate,ldesc,llink} = lang;

        const res = await fetch("http://localhost:3900/newlang",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("sanket")
            },
            body: JSON.stringify({
                lname:lname,
                lshort: lshort,
                ldate: ldate,
                ldesc: ldesc,
                llink: llink,
            })
        })

        const data = await res.json();

        if(res.status===422)
        {
            window.alert(data.msg);
        }
        else
        {
            window.alert("Added");
            usNavigate("/");
        }
    }
  return (
    <>
     <form>
  <div className="mb-3 my-4">
   <p style={{color: "white"}}>Language Name: </p> 
    <input type="text" name='lname' value={lang.lname} onChange={handleLang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
  <p style={{color: "white"}}>Language Short: </p> 
    <input type="text" name='lshort' value={lang.lshort} onChange={handleLang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
   <div className="mb-3">
   <p style={{color: "white"}}>Date: </p> 
    <input type="text" name='ldate' value={lang.ldate} onChange={handleLang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
   <div className="mb-3">
   <p style={{color: "white"}}>Language Desc: </p> 
    <input type="text" name='ldesc' value={lang.ldesc} onChange={handleLang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
   <div className="mb-3">
   <p style={{color: "white"}}>Language Link: </p> 
    <input type="text" name='llink' value={lang.llink} onChange={handleLang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
   
  <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
</form> 
    </>
  )
}

export default Add
