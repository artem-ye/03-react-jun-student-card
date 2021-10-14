import React from 'react';

const DATA_FIELD_TYPES = {
    text: 'text',
    url: 'url',
    birthYear: 'birthYear'
}

const DataField = ({label, content, fieldType}) => {    
    const toAge = (birthYear) => { 
        if (!birthYear) {
            return '';
        }        
        const yearNow = (new Date()).getFullYear();         
        return ' (' + yearNow - Number(birthYear) + ') года';
    }

    switch (fieldType) {
    case DATA_FIELD_TYPES.url:
        return (
            <li className="list-group-item border-0 ps-0">
                <span className="fw-bold">{label}:</span>
                &nbsp;<a href={content}>{content}</a>
            </li>
        );        
    case DATA_FIELD_TYPES.birthYear:
        return (
            <li className="list-group-item border-0 ps-0">
                <span className="fw-bold">{label}:</span>
                &nbsp;{toAge(content)}
            </li>
        );
    default:
        return (
            <li className="list-group-item border-0 ps-0">
                <span className="fw-bold">{label}:</span>
                &nbsp;{content}
            </li>
        );
    }        
}

export {
    DATA_FIELD_TYPES, 
    DataField
}