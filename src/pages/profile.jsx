import React, {Component} from 'react';

import Navbar from '../components/navbar';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.userId = props.userId;
        this.state = {
            user: null,
        }
        console.log(this.userId)
    }


    render() {

        return (
            <div>
                <Navbar />
            </div>
        )
    }

    
}

export default Profile;