import { SERVER_DATA } from './const';

export const getServerData = () => ( dispatch ) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  
    .then(response => {
        if(response.status === 200){
            // console.log(response, "response")
           return  response.json()
             }
             else console.log("we have an error")
        })
    .then(data => {
        console.log(data, "data")
        dispatch({
            type: SERVER_DATA,
            payload: data
        })
    })
    .catch(error => console.log(error))
}
