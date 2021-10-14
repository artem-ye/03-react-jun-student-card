import React from 'react';
import EmptyData from './emptyData';
import StudentCard from './studentCard/studentCard';
import StudentCardEditForm from './studentCardEditForm/studentCardEditForm';

const Student = ({storage, mode, onEditRedirect, onHomeRedirect}) => {            
    const data = storage.getData();

    const handlerSaveData = (data) => {
        storage.setData(data);
    }

    const renderChildComponent = () => {
        switch (mode) {
            case 'edit':
                return (
                    <StudentCardEditForm 
                        data={data} 
                        onHomeRedirect={onHomeRedirect} 
                        onSave={handlerSaveData}
                    />
                );
                
            case 'view':
                if (storage.isEmptyData()) {
                    return (<EmptyData onEditRedirect={onEditRedirect}/>);
                } 

                return <StudentCard data={data} onEditRedirect={onEditRedirect}/>                 
            default:
                return (<div>Wrong mode {mode} provided into component 'Student'</div>);
        }    
    }    

    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3 shadow p-3">
                    <h3>Карточка студента</h3>
                    {renderChildComponent()}
                </div>
            </div>
        </div>
    );
}
 
export default Student;