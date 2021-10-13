import React from 'react';

const EmptyData = ({onEditRedirect}) => {
    return ( 
        <>
            <p>Нет данных</p>
            <button className="btn btn-primary" onClick={onEditRedirect}>Добавить</button>
        </>
    );
}
 
export default EmptyData;