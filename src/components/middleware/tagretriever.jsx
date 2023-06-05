
//Retrieves all tags

function TagRetriever() {
    return fetch('http://localhost:3004/api/tags', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
        .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });
}

export default TagRetriever;
  