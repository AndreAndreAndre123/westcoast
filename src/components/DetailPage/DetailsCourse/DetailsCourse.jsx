import { useLocation } from 'react-router-dom'

const DetailCourserPage = () => {

    const location = useLocation()
   

    let details = location.state;
    console.log(details);
    return (
        <>
        <div className="teacher-course-details">
        <h1>Detaljer om kursen</h1>
        
        <div className='detail-box'>
        <h2>{details.title}</h2>
        <p>Kursens längd är: {details.time} veckor</p>
        <p>Startdatum: {details.start}</p>
        <p>Kursnummer: {details.number}</p>

        <div className='description'>
            <b>Beskrivning: {details.description}</b>
        </div>
        </div>
  
        </div>
        </>
    )
}

export default DetailCourserPage;