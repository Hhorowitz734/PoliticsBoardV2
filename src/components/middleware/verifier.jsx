//This function verifies the user based on the user token and returns the user object

function Verifier(setUserState) {

    //Part 1 --> Retrieves user key from cookies if it exists
    var userKey = null;

    for (let cookie of document.cookie.split('; ')){
        if (cookie.startsWith('userCookie=')) {
            userKey = decodeURIComponent(cookie.substring('userCookie='.length));
        }
    }
    if (!userKey){ //Handles case that no user cookie exists
        return;
    }

    //Part 2 --> Decrypts cookie
    //DECRYPT COOKIE HERE

    //Part 3 --> Sets userState to usercookie
    fetch('http://localhost:3002/api/users', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            const encodedValue = encodeURIComponent(data.insertedId.toString()); 
            document.cookie = `userCookie=${encodedValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure; SameSite=Strict;`;
        })
        .catch((error) => {
            console.log(error);
    })

}

export default Verifier;