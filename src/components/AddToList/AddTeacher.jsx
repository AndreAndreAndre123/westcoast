import { useState, useContext, useRef } from "react";

import uuid from 'react-uuid';
import "./addTo.css"
import Context from "../../Context";
const CreateTeacher = ({state}) => {

  const {openMod, setOpenMod, setTeachersList, teachersList} =useContext(Context)

  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const phone = useRef()
  const socialNbr = useRef()
  const comp = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    const teacher = { firstName: firstName.current.value,
                    lastName: lastName.current.value,
                    email: email.current.value,
                    phone: phone.current.value,
                    socialNbr: socialNbr.current.value,
                    comp: comp.current.value,
                    id:  uuid()
                    };

                    const postData = async () => {
                      fetch('http://localhost:3000/teachers', {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(teacher)
                      }).then((data) => {
                          setTeachersList([...teachersList, data])
                        setOpenMod(false)
                        
                      })
                    }
                    postData()
                    window.location.reload()
                    }


  return (

    <div className="create">
      <div className="create-container">
      <h2>Lägg till ny lärare</h2>

      <form onSubmit={handleSubmit}>
      <div>
                <label htmlFor="first-name-input">Förnamn</label>
                <input ref={firstName} id="first-name-input" type="text" required />
            </div>
            <div>
                <label htmlFor="last-name-input">Efternamn</label>
                <input ref={lastName} id="last-name-input" type="text" required></input>
            </div>
            <div>
                <label htmlFor="email-input">email</label>
                <input ref={email} type="email" id="email-input" />
            </div>
            <div>
                <label htmlFor="tel-input" >Telefon</label>
                <input ref={phone} id="tel-input"  type="text" required />
            </div>
            <div>
                <label htmlFor="socialnbr-input">Personummer</label>
                <input ref={socialNbr}id="socialnbr-input" type="text" required />
            </div>
            <div>
                <label htmlFor="comp-input">Kompetenser</label>
                <textarea ref={comp} id="comp-input" cols="20" rows="3" required></textarea> 
            </div>
        
        <button>Lägg Till lärare</button>
      </form>
      <button onClick={() => {setOpenMod(!openMod)}}>avbryt</button>
      
      
    
      
    
    </div>
    </div>

  );

}
 
export default CreateTeacher;