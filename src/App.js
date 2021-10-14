import { Switch, Route, Redirect } from 'react-router-dom';
import StudentPage from './layouts/studentPage';


function App() {            
    const handleEditRedirect = () => {
        window.location.href='/edit';
    }

    const handleHomeRedirect = () => {        
        window.location.href='/';
    }

    const renderStudentComponent = (mode) => (
        <StudentPage mode={mode} handleEditRedirect={handleEditRedirect} handleHomeRedirect={handleHomeRedirect}></StudentPage>   
    );

    return (
        <Switch>
            <Route exact path="/">     
                {renderStudentComponent('view')}                
            </Route>        
            <Route exact path="/edit">  
                {renderStudentComponent('edit')}                
            </Route>                    
            <Redirect to="/" />
        </Switch>    
    );
}

export default App;
