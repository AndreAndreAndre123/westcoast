import {  useContext, useRef, useEffect } from "react";

import uuid from 'react-uuid';
import "../../styles/styles.css";
import Context from "../../Context";
const CreateTeacher = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
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
                <label htmlFor="first-name">Förnamn</label>
                <input className="input"  ref={firstName} id="first-name" type="text" required />
            </div>
            <div>
                <label htmlFor="last-name">Efternamn</label>
                <input className="input"  ref={lastName} id="last-name" type="text" required></input>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input className="input"  ref={email} type="email" id="email" />
            </div>
            <div>
                <label htmlFor="tel" >Telefon</label>
                <input className="input"  ref={phone} id="tel"  type="text" required />
            </div>
            <div>
                <label htmlFor="socialnbr">Personummer</label>
                <input className="input"  ref={socialNbr}id="socialnbr" type="text" required />
            </div>
            <div>
                <label htmlFor="comp">Kompetenser</label>
                <textarea className="input textarea" ref={comp} id="comp" cols="20" rows="3" required></textarea> 
            </div>
        
        <button className="btn-sub" >Lägg Till lärare</button>
      </form>
      <button className="btn-cancel" onClick={() => {setOpenMod(!openMod)} }>avbryt</button>
      
      
    
      
    
    </div>
    </div>

  );

}
 
export default CreateTeacher;