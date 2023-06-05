//Retrieves articles associated with a tag

function TagFeedRetriever(tagID) {
    return fetch(`http://localhost:3004/api/tags/gettag/${tagID}`, {
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

export default TagFeedRetriever;
  