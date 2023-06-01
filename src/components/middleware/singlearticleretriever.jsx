
function SingleArticleRetriever(postId){
    
    return fetch(`http://localhost:3003/api/posts/viewone/${postId}`, {
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

export default SingleArticleRetriever;