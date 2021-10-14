import React, { useState, useEffect } from 'react';
import Input from '../../input';
import {VALIDATION_TYPES, useValidator} from './studentCardValidator';


const StudentCardEditForm = ({data, onHomeRedirect, onSave}) => {        
    const [formData, setFormData] = useState(data);
    const [error, setError] = useState({});               

    const inputFields = {
        firstName: {name: 'firstName', label: 'Имя', validation: [VALIDATION_TYPES.isRequired]},
        lastName: {name: 'lastName', label: 'Фамилия', validation: [VALIDATION_TYPES.isRequired]},
        birthYear: {name: 'birthYear', label: 'Год рождения', validation: [VALIDATION_TYPES.isRequired, VALIDATION_TYPES.birthYear]},
        portfolio: {name: 'portfolio', label: 'Портфолио', validation: [VALIDATION_TYPES.isRequired, VALIDATION_TYPES.url]}
    };

    const validator = useValidator(inputFields);   
    
    function validate() {
        const normalize = () => {
            const dataProto = Object.fromEntries(Object.keys(inputFields).map(field => [field, '']));
            return {...dataProto, ...formData};
        }        

        const errors = validator( normalize(formData) );
        setError(errors);
        return (Object.keys(errors).length === 0);
    }

    useEffect(() => {
        validate();
    }, [formData]);

    const handleFormDataChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => {
            return {...prevState, [name]: value}
        });        
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        if (validate()) {    
            onSave(formData);
            onHomeRedirect();    
        }

    }

    const validationPassed = Object.keys(error).length === 0 ? true : false;

    return ( 
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-10">
                {Object.values(inputFields).map(({name, label}) => (
                    <Input 
                        key={name}
                        name={name}
                        label={label}
                        error={error[name]}
                        value={formData[name] || ''}
                        onChange={handleFormDataChange}
                    />
                ))}
            </div>
            <div className="col-12">
                <button className="btn btn-secondary me-1" type="button" onClick={onHomeRedirect} >Назад</button>
                <button className="btn btn-primary" type="submit" disabled={!validationPassed}>Сохранить</button>
            </div>
        </form>
        
    );
}
 
export default StudentCardEditForm;