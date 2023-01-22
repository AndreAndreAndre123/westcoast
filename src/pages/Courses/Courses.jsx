import { useEffect, useState, useContext } from "react";

import useFetch from "../../Hooks/useFetch";
import CourseList from "../../components/CourseList/courseList";
import "../../styles/styles.css";
import Modal from "../../components/AddToList/modal";
import Context from "../../Context";



const Courses = () => {
  const {openMod, setOpenMod, courseList, setCourseList, whatForm, setWhatForm} =useContext(Context)

    
    const { error, isPending, data: courses } = useFetch('http://localhost:3000/courses');


    useEffect(() => {
      if(courses){
        setCourseList(courses)
        setWhatForm("course")
      }
    },[courses])
  
    return (
        <>
         <div className="teachers-course-container">
        <Modal type={"courses"} />
        <h1>Våra kurser</h1>
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { courseList && <CourseList courseList={courseList} /> }
      <button className="btn-sub" onClick={() => {setOpenMod(!openMod)}}>Lägg till kurs</button>
      </div>
        </>


    );
  
  }

export default Courses;