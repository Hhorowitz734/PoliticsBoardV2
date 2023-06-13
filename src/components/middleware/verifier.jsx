//This function verifies the user based on the user token and returns the user object

function Verifier() {

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
    return fetch(`http://localhost:3002/api/users?_id=${userKey}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .catch((error) => {
        console.log(error);
        throw error;
        });
}

export default Verifier;