const useStorage = (storeId) => {
    let data = localStorage.getItem(storeId);

    return {
        getData: () => {
            return data;
        },
        setData: (newData) => {            
            localStorage.setItem(storeId, data);
            data = {...newData};
            return data;
        }        
    }
}

export default useStorage;