import React, {useState} from 'react';
import Student from '../components/student/student';
import useStorage from '../storage/storage';

const StudentPage = ({mode, handleEditRedirect, handleHomeRedirect}) => {
    const [storage, setStorage] = useState(useStorage('student-react-app'));           
    
    const studentModel =  {        
        getData: () => {
            return storage.getData() || {};
        },
        setData: (data) => {
            console.log('saving data ', data);
            storage.setData(data);
            setStorage(storage);
        },
        isEmptyData: () => {
            const data = storage.getData() || {};            
            return (Object.values(data).filter(val => true && val).length === 0);
        }
    }           

    return ( 
        <Student mode={mode} storage={studentModel} onEditRedirect={handleEditRedirect} onHomeRedirect={handleHomeRedirect}/>
    );
}
 
export default StudentPage;