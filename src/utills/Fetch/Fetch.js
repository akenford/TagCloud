import axios from 'axios'

export default class Fetch {
    
    baseApiCall(type, url) {
        return fetch(url, {
            method: type,
        })
             .then((response) => {
             return response.json();
         })
           .catch( error => 
               console.log(error)
            );
    }
}