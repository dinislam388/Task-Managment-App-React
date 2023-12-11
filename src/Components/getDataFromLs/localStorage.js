
export const getDataFromLs = ()=>{
    const data = JSON.parse(localStorage.getItem("todos"));
    if(data){
        return data;
    }
    return [];
};