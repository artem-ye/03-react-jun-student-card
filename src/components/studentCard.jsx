import React from 'react';

const StudentCard = ({data}) => {
    const isEmptyData = Object.keys(data).length = 0;    

    const inputFields = {
        firstName: {name: 'firstName', label: 'Имя'},
        lastName: {name: 'lastName', label: 'Фамилия'},
        birthYear: {name: 'birthYear', label: 'Год рождения'},
        portfolio: {name: 'portfolio', label: 'Портфолио'}
    };

    if (isEmptyData) {
        return (<>
            <h1>Карточка студента</h1>                
            <p>Нет данных</p>
            <button className="btn btn-primary">Создать</button>            
        </>)
    } else {
        const studentAge = (birthYear) => {
            const yearNow = (new Date()).getFullYear(); 
            return yearNow - birthYear;
        };

        return (<>
            <h1>Карточка студента</h1>                
            <ul className="list-group list-group-flush border-0">
                {
                    Object.values(inputFields).map((field) => {
                        let content = data[field.name];

                        console.log(field.name,  inputFields.portfolio.name, field.name === inputFields.portfolio.name);

                        if (field.name === inputFields.birthYear.name && content) {
                            content += ' (' + studentAge(content) + ') года';
                        } else if (field.name === inputFields.portfolio.name && content) {                            
                            content = (<a href={content}>{content}</a>);                            
                        }

                        return(<li key={field.name} className="list-group-item border-0"> <span className="fw-bold">{field.label}:</span>&nbsp;{content}</li>);
                    })
                }

                {/* <li className="list-group-item border-0"> <span className="fw-bold">Имя</span> An item</li>
                <li className="list-group-item border-0">A second item</li>
                <li className="list-group-item border-0">A third item</li>
                <li className="list-group-item border-0">A fourth item</li>
                <li className="list-group-item border-0">And a fifth one</li> */}
            </ul>
            <button className="btn btn-primary">Редактировать</button>            
        </>)
    }   
}
 
export default StudentCard;
