
import { useEffect, useState, useContext } from "react";
import Context from "../../Context";
import useFetch from "../../Hooks/useFetch";
import TeacherList from "../../components/TeacherList/TeacherList";
import Modal from "../../components/AddToList/modal";
import "../../styles/styles.css";
const Teachers = () => {
  
  const {openMod, setOpenMod, teachersList, setTeachersList, setWhatForm} =useContext(Context)
    const { error, isPending, data: teachers } = useFetch ('http://localhost:3000/teachers');

    useEffect(() => {
      if(teachers){
        setTeachersList(teachers)
        setWhatForm("teacher")
        
      }
    },[teachers])
    
    console.log(teachersList)
    return (
        <>
          <div className="teachers-course-container">
        <Modal type={"teachers"} />
        <h1>Bästa lärarna i landet</h1>
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { teachersList && <TeacherList teachersList={teachersList} /> }
      <button className="btn-sub" onClick={() => {setOpenMod(!openMod)}}>Lägg till lärare</button>
      </div>
 
        </>


    );
  
  }

export default Teachers;