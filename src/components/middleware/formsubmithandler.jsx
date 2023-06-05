//Exists to handle form submission to server; middleware code

import SingleArticleRetriever from "./singlearticleretriever";

function sleep(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
  }

async function AddTagsToArticle(postID, tags) {

    const article = await SingleArticleRetriever(postID);

    fetch('http://localhost:3004/api/tags', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tags: tags,
            article: article
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
}

function FormHandler(formdata) {

    fetch('http://localhost:3003/api/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata),
    })
    .then((response) => response.json())
    .then((data) => {
        AddTagsToArticle(data, formdata.tags)
    })
    .catch((error) => {
        console.log(error);
    })

    sleep(500);
    window.location = '/'; //Redirects user home

}

export default FormHandler;