import { useContext, useRef, useEffect } from "react";

import uuid from 'react-uuid';
import "../../styles/styles.css";
import Context from "../../Context";
const Create = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
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
            <div className="input-div">
                <label htmlFor="title" >Kursnamn</label>
                <input className="input" ref={titleInput} id="title" type="text" required />
            </div>
            <div className="input.div">
                <label htmlFor="start" >Startdatum</label>
                <input className="input" ref={startInput} id="start" type="date" />
            </div>
            <div className="input.div">
                <label htmlFor="lenght">Kurslängd (veckor)</label>
                <input className="input" ref={lenghtInput} id="lenght" type="text" required />
            </div>
            <div className="input-div">
                <label htmlFor="number">Kursnummer</label>
                <input className="input" ref={numbertInput} id="number" type="text" required />
            </div>
            <div className="input-div">
                <label htmlFor="descript">Kort beskrivning</label>
                <textarea className="input textarea" ref={descriptInput} id="descript" cols="30" rows="3" required></textarea>
            </div>
        
        <button className="btn-sub">Lägg Till kurs</button>
      </form>
      <button className="btn-cancel" onClick={() => {setOpenMod(!openMod)}}>avbryt</button>
      
      
    
      
    
    </div>
    </div>
  );

}
 
export default Create;