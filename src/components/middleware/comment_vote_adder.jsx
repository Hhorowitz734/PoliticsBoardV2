//Adds a vote to a given comment

function CommentVoteAdder (postID, commentID, vote) {

    return fetch('http://localhost:3003/api/posts/updatecommentscore', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: postID,
            commentId: commentID,
            vote: vote
        }),
    })
    .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });

}

export default CommentVoteAdder;