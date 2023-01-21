import { useContext, useRef } from "react";

import uuid from 'react-uuid';
import "./addTo.css"
import Context from "../../Context";
const Create = () => {

  const {openMod, setOpenMod, courseList, setCourseList} =useContext(Context)

  const titleInput = useRef()
  const startInput = useRef()
  const descriptInput = useRef()
  const lenghtInput = useRef()
  const numbertInput = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    const course = { title: titleInput.current.value,
                      time: lenghtInput.current.value,
                      description: descriptInput.current.value,
                      start: startInput.current.value,
                      number: numbertInput.current.value,
                      id:  uuid()
                    };

                    if(startInput.current.value != ""){
                      const postData = async () => {
                        fetch('http://localhost:3000/courses', {
                          method: 'POST',
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(course)
                        }).then((data) => {
                          setCourseList([...courseList, data])
                          setOpenMod(false)
                          
                        })
                      }
                      postData()
                      window.location.reload()
                      

                    }
  }
  return (
    
    <div className="create">
      <div className="create-container">
      <h2>Lägg till ny kurs</h2>

      <form onSubmit={handleSubmit}>
      <div>
                <label >Kursnamn</label>
                <input ref={titleInput}  type="text" required />
            </div>
            <div>
                <label >Startdatum</label>
                <input ref={startInput} type="date" />
            </div>
            <div>
                <label>Kurslängd (veckor)</label>
                <input ref={lenghtInput} type="text" required />
            </div>
            <div>
                <label >Kursnummer</label>
                <input ref={numbertInput} type="text" required />
            </div>
            <div>
                <label>Kort beskrivning</label>
                <textarea ref={descriptInput} cols="30" rows="5" required></textarea>
            </div>
        
        <button>Lägg Till kurs</button>
      </form>
      <button onClick={() => {setOpenMod(!openMod)}}>avbryt</button>
      
      
    
      
    
    </div>
    </div>
  );

}
 
export default Create;