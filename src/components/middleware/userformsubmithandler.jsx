

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
            const encodedValue = encodeURIComponent(data.insertedId.toString()); 
            document.cookie = `userCookie=${encodedValue}; expires=Fri, 31 Dec 1970 23:59:59 GMT; path=/; secure; SameSite=Strict;`; //Deletes cookie
            document.cookie = `userCookie=${encodedValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure; SameSite=Strict;`;
            setTimeout(() => { 
                window.location = '/'; // Redirects user home after a small delay
              }, 100);
        })
        .catch((error) => {
            console.log(error);
        })
    } else { //HANDLES CASE OF USER LOGIN

        fetch('http://localhost:3002/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
                document.cookie = `userCookie=${data.userId}; expires=Fri, 31 Dec 1970 23:59:59 GMT; path=/; secure; SameSite=Strict;`; //Deletes cookie
                document.cookie = `userCookie=${data.userId}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure; SameSite=Strict;`;
                setTimeout(() => { 
                    window.location = '/'; // Redirects user home after a small delay
                  }, 100);
            } else {
                //Handle case of failed login here
            }
        })
        .catch((error) => {
            console.log(error);
        })

    }


}

export default UserFormSubmitHandler;