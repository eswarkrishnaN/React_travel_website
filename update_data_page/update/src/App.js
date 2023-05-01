import './App.css';
import {useState} from "react";
function App() {
  const[imageur,setimageurl] = useState('');
  const[title,setitle] = useState('');
  const[loaction,setlocation] = useState('');
  const[grade,setgrade] = useState('');
  const[fees,setFees] = useState('');
  const[description,setDescription] = useState('');



  const from_submition = async (event) =>{
    event.preventDefault();
    const data ={imageur,title,loaction,grade,fees,description};
  
    const response = await fetch('http://127.0.0.1:5000/add-data', {
    
      method: 'Post',
      headers :{
        'Content-type' :'application/json'
      },
      body:JSON.stringify(data)
    });
    // const result = await response.json();
    // console.log(result);
    // if(response.ok){
    //   console.log('sucess');
    // }else{
    //   console.log('erroe');
    // }

    setDescription('')
    setFees('')
    setgrade('')
    setimageurl('')
    setitle('')
    setlocation('')
  
  }
   

  return (
    <div className="login-form">
      <h3>Enter your data upload to server</h3>
      <form onSubmit={from_submition} >
        <label>
          <span>Image_url:</span>
          <input  value ={imageur} onChange={(event) => setimageurl( event.target.value)} type="url" placeholder="Url"   required />
        </label>
        <label>
        <span> Titel:</span>
          <input value={title} onChange={(event) => setitle(event.target.value)} type="text" placeholder="Title"    />
        </label>
        <label>
          <span>location:</span>
          <input value={loaction} onChange={(event) => setlocation(event.target.value)}type="text" placeholder=" loaction"    required />
        </label>
        <label>
         <span>grade:</span> 
          <input  value={grade} onChange={(event) => setgrade(event.target.value)}type="text" placeholder=" Chill"  required />
        </label>
        <label>
          <span>Fees:</span>
          <input value={fees} onChange={(event) => setFees(event.target.value)} type="text"  placeholder="price" required />
        </label>
        <label>
          <span>Description:</span>
          <input value={description} onChange={(event) =>setDescription(event.target.value)} type="text" className="descrition"  placeholder=" enter some information" required  />
        </label>
        <button type="submit">Submite data</button>
      </form>
    </div>
  );
}

export default App;
