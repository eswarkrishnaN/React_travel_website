import "./main.css"
import {useEffect,useState} from "react";
import {GrLocation} from "react-icons/gr";
import {HiClipboardList} from "react-icons/hi"
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
       fetchData();
     },[]);
   
     return(
         <section className="main container section">
            <div className="sectitle">
                <h3 className="title">
                    Most visited destination
                </h3>

            </div>
            <div className="secContenet gird">
            {
                    data.length > 0 ? data.map((item) => (
                        <div key={item.id} className="singledestination">
                            <img src={item.imageurl} alt={item.title} loading="lazy" />
                            <div className="title">{item.title}</div>
                            <div className="contitne flex">
                                <GrLocation className="loaction_icon"></GrLocation>
                                <span className="location">{item.location}</span>
                            </div>
                            <div className="fees flex">
                                <div className="grade">
                                    <p>{item.grade}   <span>{item.fees}</span> </p>
                                </div>
                                
                            </div>
                            
                            <div className="desc">
                                    <p>{item.description}</p>
                                </div>
                            <button className="btn flex"> Detials <HiClipboardList className="icon"></HiClipboardList></button>
                        </div>
                    )):<p>no data avaliable we updating the server</p>
                }
                
               
            </div>



        </section>
     );

};

export default Main