import React from 'react';

import {DATA_FIELD_TYPES, DataField} from '../../dataField';

const StudentCard = ({data, onEditRedirect}) => {    
    const formFields = {
        firstName: {name: 'firstName', label: 'Имя'},
        lastName: {name: 'lastName', label: 'Фамилия'},
        birthYear: {name: 'birthYear', label: 'Год рождения'},
        portfolio: {name: 'portfolio', label: 'Портфолио', fieldType: DATA_FIELD_TYPES.url}
    };         

    return (<>                        
        <ul className="list-group list-group-flush border-0">
            {
                Object.values(formFields).map(formFieldConfig => {
                    return (
                        <DataField 
                            key={formFieldConfig.name}
                            label={formFieldConfig.label}
                            fieldType={formFieldConfig.fieldType}
                            content={data[formFieldConfig.name]}                                
                        />
                    );
                })                    
            }               
        </ul>
        <button 
            className="btn btn-primary mt-2"
            onClick={onEditRedirect}            
        >Редактировать
        </button>            
    </>)    
}
 
export default StudentCard;
