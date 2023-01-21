
import "../../styles/styles.css";
import { useEffect, useState, useContext } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
const TeacherList = ({teachersList}) => {

  console.log(teachersList)

return(

  <>
  <div className="teacher-course-list-container">
  <h2>Lista med våra lärare</h2>

  <div className="each-teacher-course-container"> 
  {
    teachersList && teachersList.map(teacher => {
      return(
        <div key={teacher.id} className="each-teacher-box">
        <h4>{teacher.firstName} {teacher.lastName}</h4>
        <p>Personnummer: {teacher.socialNbr}</p>
        <p>e-post: {teacher.email}</p>
        <p>Telefon: {teacher.phone}</p>
        <Link to={`teachers${teacher.id}`} state={teacher}>detaljer</Link>
      
        </div>
      )
     
    })
  }
  </div>
  </div>

  </>


)
  }
   
  export default TeacherList;