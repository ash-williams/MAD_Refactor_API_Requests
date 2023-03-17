

export const getRequest = (url, success, failure) => {
    return fetch(url)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else{
            throw response.status;
        }
    })
    .then((resJson) => {
        success(resJson)
    })
    .catch((err) => {
        failure(err)
    })
}