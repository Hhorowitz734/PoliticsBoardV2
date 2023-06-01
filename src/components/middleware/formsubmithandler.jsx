//Exists to handle form submission to server; middleware code

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
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

    window.location = '/'; //Redirects user home

}

export default FormHandler;