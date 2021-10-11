import React, { useState, useEffect } from 'react';
import Input from './input';
import validator from '../utils/validator';

const StudentCard = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});

    const inputFields = {
        firstName: {name: 'firstName', label: 'Имя'},
        secondName: {name: 'secondName', label: 'Фамилия'},
        birthYear: {name: 'birthYear', label: 'Год рождения'},
        portfolio: {name: 'portfolio', label: 'Портфолио'}
    };

    const validationRules = {
        [inputFields.firstName.name]: {
            isRequired: {message: 'Поле "'+ inputFields.firstName.label + '" обязательно для заполнения'}
        }
    }

    function validate() {
        const errors = validator(formData, validationRules);
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

        // validate();
        // setError(validator(formData))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // const res = validator(formData, validationRules);
        // console.log(res);

        // setError(Object.keys(error).length === 0 ? {name: 'Error'} : {});
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
 
export default StudentCard;