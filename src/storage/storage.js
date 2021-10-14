const useStorage = (storeId) => {
    let data = localStorage.getItem(storeId);
    data = JSON.parse(data);

    return {
        getData: () => {
            return data;
        },
        setData: (newData) => {                        
            data = {...newData};
            localStorage.setItem(storeId, JSON.stringify(data));
            return data;
        }        
    }
}

export default useStorage;