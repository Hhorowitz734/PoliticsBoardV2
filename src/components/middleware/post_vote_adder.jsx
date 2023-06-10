

function PostVoteAdder(postID, userID, vote) {
    
    return fetch('http://localhost:3003/api/posts/updatepostscore', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: postID,
            vote: vote,
            userId: userID
        }),
    })
    .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });

}

export default PostVoteAdder;