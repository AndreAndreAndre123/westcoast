import { Link } from "react-router-dom";
import "../../styles/styles.css";


const CourseList = ({courseList}) => {

console.log(courseList)
    return(

          <>
          <div className="teacher-course-list-container">
          <h2>Lista med våra kurser</h2>

          <div className="each-teacher-course-container"> 
          {
            courseList && courseList.map(course => {
              return(
                <div key={course.id} className="each-teacher-box">
                <h4>{course.title}</h4>
                <p>Längd: {course.time} veckor</p>
                <p>Startdatum: {course.start}</p>
                <Link to={`courses${course.id}`} state={course}>detaljer</Link>
               
              
                </div>
              )
             
            })
          }
          </div>
          </div>
          </>


      )
  }
   
  export default CourseList;