

function FeedRetriever() {
    return fetch('http://localhost:3002/api/posts', {
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

export default FeedRetriever;
  