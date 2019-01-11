
export function fetcher(url, o) {

    let options = Object.assign({
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'}
    }, o);

    return fetch(url, options).then((response) => {

        return response.json();
    })
        .then(result => {
            return result
        })
        .catch(error => console.log('error in fetcher: ', error))
}