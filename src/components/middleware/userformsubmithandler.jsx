

function UserFormSubmitHandler(loginBool, userData) {

    if (!loginBool){ //Case for when user is registering an account
        fetch('http://localhost:3002/api/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    window.location = '/'; //Redirects user home

}

export default UserFormSubmitHandler;