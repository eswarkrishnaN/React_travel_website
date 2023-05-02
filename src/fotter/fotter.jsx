import "./fotter.css"
import waterfall from "../data/waterfall.mp4"
import {FiSend} from "react-icons/fi"
const Fotter = () =>{
 
    return(
        <section className="footer">
            <div  className="videoDiv">
                <video src={waterfall} loop autoPlay muted typeof="video/mp4" />

            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="input flex">
                        <input type="text" placeholder="Enter Email address" /
                        >
                        <button className="btn flex" type="submit">
                            SEND  <FiSend className="icon"></FiSend>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Fotter