import "./icvons.scss";
import {TbBrandFacebook} from "react-icons/tb";
import {FiInstagram} from "react-icons/fi";
import {ImTwitter} from "react-icons/im";


const Icons =() =>{

    return(
        <div className="socialicons">
            <div className="right_icons">
                <TbBrandFacebook></TbBrandFacebook>
                <FiInstagram></FiInstagram>
                <ImTwitter></ImTwitter>
            </div>
            <div className="left_icons">

            </div>
        </div>
    )
}

export default Icons;