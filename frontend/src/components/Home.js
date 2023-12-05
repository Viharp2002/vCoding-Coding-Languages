import React, { useEffect, useState } from 'react';
import "../css/home.css";
import img1 from "../images/pic1.jpg";
import img2 from "../images/pic2.jpg";
import img3 from "../images/pic3.jpg";

const Home = () => {

    //Search Bar
    const handleSearch = (e)=>{

                // darek box no same class 'search'
                const namesFromdom = document.getElementsByClassName("search");
    
                
                    // Je value tya type thai hase e
                    const {value} = e.target;
                    
                    // Compare karava lowercase ma fervyu
                    const searchQuery = value.toLowerCase();
                    
                    const ifnotfound = document.getElementById("found");
    
                    var count = 0;
                    
                    // darek boxt mate check karse
                    for(const nameElement of namesFromdom)
                    {
                        // for loop ma je particular class ek-ek karine avse eni andar na textContent(aa textcontent ma eni andar na badha sub-div avi gaya) ne lowercase ma fervse
                        let name = nameElement.textContent.toLocaleLowerCase();
                        
                        // banne value ne check karse
                        
                        if(name.includes(searchQuery) || searchQuery==="")
                        {
                            count=1;                    
                            nameElement.style.display = "flex";
                            ifnotfound.style.visibility = "hidden";    
                        }
                        else{
                            nameElement.style.display = "none";
                        }
                    }
    
                    if(count===0)
                    {
                        ifnotfound.style.visibility = "visible";
                    }
    }

    //Fetch data
    const[lang,setLang] = useState([]);

    const showLang = async()=>{
        try {
            const res = await fetch("http://localhost:3900/alllang");
    
            const data = await res.json();
    
            if(res.status===201)
            {
                setLang(data);
            }
            else
            {
                window.alert(data.msg);
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        showLang();
    },[]);
    
  return (
    <>

    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} height="570px" className="d-block w-100 imagi" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="h55"><b>Welcome to Vcoder</b></h5>
                        <p className="p55"><b>Technology News, Development, Trends</b></p>
                        <a href="https://devdocs.io/c/"  className="btn btn-danger">C</a>
                        <a href="https://devdocs.io/cpp/"  className="btn btn-primary">C++</a>
                        <a href="https://www.swift.org/documentation/"  className="btn btn-success">Swift</a>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img2} height="570px" className="d-block w-100 imagi" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="h55"><b>The best coding Blog</b></h5>
                    <p className="p55"><b>Technology News, Development, Trends</b></p>
                        <a href="https://docs.flutter.dev/"  className="btn btn-danger">Flutter</a>
                        <a href="https://docs.python.org/3/"  className="btn btn-primary">Python</a>
                        <a href="https://reactjs.org/"  className="btn btn-success">React JS</a>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img3} height="570px" className="d-block w-100 imagi" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="h55">Stay Tuned Excited</h5>
                    <p className="p55"><b>Technology News, Development, Trends</b></p>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/"  className="btn btn-danger">C# Manuel</a>
                    <a href="https://reactnative.dev/docs/getting-started"  className="btn btn-primary">React Native</a>
                    <a href="https://nodejs.org/en/docs/"  className="btn btn-success">Node JS</a>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <h3 className="my-4 text-center iamv">HERE YOU WILL FIND THE OFFICIAL DOCUMENTATION FOR EVERY LANGUAGE</h3>
   

    <form className="form-search">
        <input onInput={handleSearch} type="search" name="search" placeholder="Language name..."/>
        <button disabled type="submit">Search</button>
        
    </form>
    
    <h3 className="pd-4 text-center my-4" id="found">Oops...Language not found. Please Type exact name of language</h3>
    
    <div className="container my-4">
        <div className="row mb-2 my-4">
          {
            lang.map((user)=>{
            
                return(
            <div className="vihm col-md-6 search" key={user._id}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="vihu search d-inline-block mb-2 text-primary">{user.lname}</strong>
                        <h3 className="vihu mb-0">{user.lshort}</h3>
                        <div className="vihu mb-1 text-muted">{user.ldate}</div>
                        <p className="vihu card-text mb-auto">{user.ldesc}</p>
                        <a href={user.llink} className="stretched-link">Visit Website</a>
                    </div>
                </div>
            </div>
            )
            })
          }
        </div>
        </div>
    </>
  )
}

export default Home
