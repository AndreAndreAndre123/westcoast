import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Teachers from "./pages/Teachers/Teachers"
import Courses from "./pages/Courses/Courses"
import DetailsTeacher from "./components/DetailPage/detailsTeacher/DetailTeacher"
import Nav from "./components/Nav/Nav";
import DetailsCourse from "./components/DetailPage/DetailsCourse/DetailsCourse"



function App() {
  return (
    
    <Router>
       <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path= '/teachers/:id' element={<DetailsTeacher />} />
        <Route path= '/courses/:id' element={<DetailsCourse />} />
      </Routes>

    </Router>
    

  );
}

export default App;
