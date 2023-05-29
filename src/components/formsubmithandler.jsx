//Exists to handle form submission to server; middleware code

function FormHandler(formdata) {

    fetch('http://localhost:3002/api/posts', {
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

}

export default FormHandler;