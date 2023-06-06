
function sleep(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
}

function CommentAdder (postID, comment) {

    fetch('http://localhost:3003/api/posts/addcomment', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                postId : postID,
                comment : comment
            }
        ),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

    sleep(100);
    location.reload();
}

export default CommentAdder;