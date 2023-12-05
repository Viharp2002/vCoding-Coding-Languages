import React from 'react'

function Delete() {

    const deleteLang = async()=>{
        const id = document.getElementById("id").value;
        
        const res = await fetch(`http://localhost:3900/del/`+id,{
            method:"DELETE",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        
        if(!res.status===201 || !data)
        {
            console.log("Error");
            alert("fail");
        }
        else{
            alert("Deleted");
        }
    }

  return (
    <>
    <form onSubmit={deleteLang}>
      Id: <input type="text" id='id' name='id'></input>
      <input type="submit" value="Enter"></input> 
    </form>
    </>
  )
}

export default Delete
