

function SingleUserRetriever (userKey){


    return fetch(`http://localhost:3002/api/users?_id=${userKey}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });
}

export default SingleUserRetriever;