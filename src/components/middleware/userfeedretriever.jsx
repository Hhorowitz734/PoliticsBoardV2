
//Retrieves a specific user's posts
function UserFeedRetriever(userID) {
    return fetch(`http://localhost:3003/api/posts/viewuserposts/${userID}`, {
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

export default UserFeedRetriever;
  