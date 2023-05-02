import "./main.css"
import {useEffect,useState} from "react";
const Main = () =>{

    const[data,setdata] =useState([]);

     useEffect( () =>{
        async function fetchData() {
            try {
              const response = await fetch("http://127.0.0.1:8888/api-get");
              const json = await response.json();
              setdata(json);
              
            } catch (error) {
              console.log(error);
            }
          }
          console.log(data)

       fetchData();
     },[]);
   
     return(
         <section className="main container section">
            <div className="sectitle">
                <h3 className="title">
                    Most vistied destination
                </h3>

            </div>
            <div className="secContenet gird">
            {
                    data.length > 0 ? data.map((item) => (
                        <div key={item.id} className="singledestination">
                            <img src={item.imageurl} alt={item.title} loading="lazy" />
                            <div className="contitne flex">
                                <span className="location">{item.location}</span>
                            </div>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{item.grade}</span>
                                </div>
                                <div className="price">
                                    <h5>{item.fees}</h5>
                                </div>
                                <div className="desc">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )):<p>no data avaliable we updating the server</p>
                }
                
            </div>



        </section>
     );

};

export default Main