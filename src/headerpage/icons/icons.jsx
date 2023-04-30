import "./icons.css";
import {TbBrandFacebook} from "react-icons/tb";
import {FiInstagram} from "react-icons/fi";
import {ImTwitter} from "react-icons/im";
import {TiSocialSkypeOutline ,TiSocialGooglePlus} from "react-icons/ti"



const Icons =() =>{

    return(
        <div className="socialicons">
            <div className="right_icons">
                <TbBrandFacebook className="icon"></TbBrandFacebook>
                <FiInstagram className="icon"></FiInstagram>
                <ImTwitter className="icon"></ImTwitter> 
                {/* <div className="left_icons"> 
                <TiSocialSkypeOutline className="icon"/>
                <TiSocialGooglePlus className="icon"/>
               </div>   */}
                </div>
                
               
            
            
        </div>
        
    )
}

export default Icons;