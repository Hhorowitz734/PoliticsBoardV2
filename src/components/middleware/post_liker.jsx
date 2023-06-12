

function PostLiker(articleID, userID) {

    fetch('http://localhost:3002/api/users/add-like', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            articleID : articleID,
            userID : userID
        }),
    })
    .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });

}

export default PostLiker;