import React from 'react';
import EmptyData from './emptyData';
import StudentCard from './studentCard/studentCard';
import StudentCardEditForm from './studentCardEditForm/studentCardEditForm';

const Student = ({storage, mode, onEditRedirect, onHomeRedirect}) => {        
    let childComponent;    

    const data = storage.getData();

    switch (mode) {
        case 'edit':
            childComponent =<StudentCardEditForm data={data} onHomeRedirect={onHomeRedirect}/>;
            break;
        case 'view':
            childComponent = !storage.isEmptyData() 
                ? <StudentCard data={data} onEditRedirect={onEditRedirect}/> 
                : <EmptyData onEditRedirect={onEditRedirect}/>;
            break;
        default:
            childComponent = <div>Wrong mode {mode} provided into component 'Student'</div>;
    }    

    return(
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="w-100">
                <h3>Карточка студента</h3>
                {childComponent}
            </div>
        </div>
    );
}
 
export default Student;