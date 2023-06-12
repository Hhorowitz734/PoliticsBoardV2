

function PostLiker(articleID, userID, likeIncrement) {

    //Deals with user like storage
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
    
    //Deals with article likes storage
    fetch('http://localhost:3003/api/posts/like-post', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postID : articleID,
            likes: likeIncrement
        }),
    })
    .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
    });
        

}

export default PostLiker;