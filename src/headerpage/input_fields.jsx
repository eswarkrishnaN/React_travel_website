import "./input_filed.css"
import {MdEditLocation,MdFilterAlt} from "react-icons/md";



const Input = ()=>{

    return(
        <div className="cardDiv grid">
        <div className="destinationInput">
                <label htmlFor="city">
                    search your destination
                </label>
                <div className="input flex">
                <input type="text" htmlFor="city" placeholder="Enter name here...">
                </input>
                <MdEditLocation className="icon"/>
                </div>
                <div className="destinationInput">
                <label htmlFor="city">
                    search your Second destination
                </label>
                <div className="input flex">
                <input type="text" htmlFor="city" placeholder="Enter name here...">
                </input>
                <MdEditLocation className="icon"/>
                </div>
                </div>
                <div className="destinationInput">
                <label htmlFor="date">
                    search your Date
                </label>
                <div className="input flex">
                <input type="date" htmlFor="date" >
                </input>
                </div>
                </div>
                <div className="destinationInput">
                <label htmlFor="price">
                    Maxmim price $365575
                </label>
                <div className="input flex">
                <input type="range" max="365575" min="500"htmlFor="price">
                </input>
                </div>
                </div>

                <div className="searchoptions flex">
                    <MdFilterAlt className="icon">

                    </MdFilterAlt>
                    <span>More filter</span>
                </div>

        </div>
        </div>
    )
}

export default Input