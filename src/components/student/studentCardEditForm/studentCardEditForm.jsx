import React, { useState, useEffect } from 'react';
import Input from '../../input';
import {VALIDATION_TYPES, useValidator} from './studentCardValidator'

const StudentCardEditForm = ({data, onHomeRedirect}) => {        
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
        const errors = validator(formData);
        setError(errors);
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
        console.log('Submitting...');
        validate();

        if (Object.keys(error).length === 0) {
            onHomeRedirect();
        }

    }

    return ( 
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
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
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
        
    );
}
 
export default StudentCardEditForm;