// import "./App.css";
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Student from './components/student/student';
import useStorage from './storage/storage';

function App() {    
    // const STUDENT_INITIAL_STATE = {
    //     firstName: 'Artem', lastName: 'Yemelianov', birthYear: 1983, portfolio: 'i.ua'
    // };
    // const [student] = useState(() =>);    

    const [storage, setStorage] = useState(useStorage('student-react-app'));           
    
    const studentModel =  {        
        getData: () => {
            return storage.getData() || {};
        },
        setData: (data) => {
            setStorage(storage.setData(data));
        },
        isEmptyData: () => {
            const data = storage.getData() || {};            
            return (Object.values(data).filter(val => true && val).length === 0);
        }
    }

    const handleEditRedirect = () => {
        window.location.href='/edit';
    }

    const handleHomeRedirect = () => {
        window.location.href='/';
    }

    return (
        <Switch>
            <Route exact path="/">                
                <Student mode='view' storage={studentModel} onEditRedirect={handleEditRedirect} onHomeRedirect={handleHomeRedirect}/>
            </Route>        
            <Route exact path="/edit">            
                <Student mode='edit' storage={studentModel}/>
            </Route>                    
            <Redirect to="/" />
        </Switch>    
    );
}

export default App;
