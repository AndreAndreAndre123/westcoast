import AddCourse from "./AddCourse";
import AddTeacher from "./AddTeacher";
import  ReactDOM  from "react-dom";
import {useContext} from "react"

import "../../styles/styles.css";
import Context from "../../Context";

const Modal = ({type}) => {
    const {openMod} =useContext(Context)
    console.log(type)
    if(!openMod)return null;

    const Overlay = () => {
        return(
            <div className="overlay-div"></div>
            
        )
    }

    return(
        <>
        
        {
           ReactDOM.createPortal(
                <Overlay />,
                document.querySelector("#overlay-root")
            )
            
        }
        
        {ReactDOM.createPortal(<> {type =="courses" ? <AddCourse />  : <AddTeacher /> }</>,
        document.querySelector("#modal-root"))}
        
        </>
    )

}




export default Modal;