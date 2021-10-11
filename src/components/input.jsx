import React from 'react';

const Input = ({name, label, error, value, onChange}) => {
    const showError = !!error;

    return ( 
        <>
            <label 
                htmlFor={name} 
                className="form-label"
            >{label}</label>
            <input 
                type="text" className={"form-control" + (showError ? ' is-invalid' : '')} 
                id={name} name={name} value={value} onChange={onChange}></input>

            {showError &&
            <div className="invalid-feedback">
                {error}
            </div>}
        </>
    );
}
 
export default Input;