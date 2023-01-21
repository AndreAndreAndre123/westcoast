
import React, { useState } from 'react';

const Context = React.createContext({
  openMod: false,
  courseList: [],
  teachersList: [],
  whatForm: ""
});

export const ContextProvider = (props) => {

  const [openMod, setOpenMod] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);
  const [whatForm, setWhatForm] = useState("");

  return (
    <Context.Provider
      value={{
        openMod,
        setOpenMod,
        courseList,
        setCourseList,
        teachersList,
        setTeachersList,
        whatForm,
         setWhatForm
      }}
    >
      {props.children}
    </Context.Provider>
  )
};

export default Context;