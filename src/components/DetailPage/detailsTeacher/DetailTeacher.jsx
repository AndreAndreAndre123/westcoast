import { useLocation } from 'react-router-dom'

const DetailTeacherPage = () => {

    const location = useLocation()
   

    let details = location.state;
    console.log(details);
    return (
        <>
        <div className="teacher-course-details">
        <h1>Detaljer om läraren</h1>

        <div className='detail-box'>
        <h2>{details.firstName} {details.lastName}</h2>
        <p>Personnummer: {details.socialNbr}</p>
        <p>e-post: {details.email}</p>
        <p>Telefon: {details.phone}</p>

        <div className='description'>
            <b>kompetenser: {details.comp}</b>
        </div>
        </div>

        </div>
        </>
    )
}

export default DetailTeacherPage;