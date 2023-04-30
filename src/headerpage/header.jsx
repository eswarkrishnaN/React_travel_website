import "./header.css";
import sea from "../data/sea.mp4";
import Input  from "../headerpage/input/input_fields";
import Icons from "./icons/icons";


const Header = ()=>{
    return(
        <section className="Header">
            <div className="overlay"></div>
            <video src={sea} muted autoPlay loop typeof="video/mp4"></video>
            
            <div className="homecontent container">
                <div className="textdiv">
                    <span className="smalltext">
                        our offers
                    </span>
                    <h1 className="homeTitle">
                        search your Holidays
                    </h1>
                </div>
                <Input></Input>
              
                <Icons></Icons>      
            </div>
            
        </section>
    );
};


export default Header