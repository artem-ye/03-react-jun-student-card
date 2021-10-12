// import "./App.css";
import { useState } from 'react';
import StudentCard from './components/studentCard';
import StudentCardEditForm from "./components/studentCardEditForm/studentCardEditForm";

function App() {
    const [show] = useState(false);

    const STUDENT_INITIAL_STATE = {
        firstName: 'Artem', lastName: 'Yemelianov', birthYear: 1983, portfolio: 'i.ua'
    };
    const [student] = useState(STUDENT_INITIAL_STATE);
    

    return (
        <>
            {show && <StudentCardEditForm></StudentCardEditForm>
                
            }
            <StudentCard
                data={student}
            ></StudentCard>
        </>
    );
}

export default App;
