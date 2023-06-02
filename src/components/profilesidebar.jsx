import React, {Component} from 'react';

class ProfileSidebar extends Component {
    
    constructor(props){
        super(props);

        this.bg = `data:image/svg+xml;base64,${btoa(
            `<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="600" height="900" fill="#5e21ff"></rect><g transform="translate(233.81718751343067 440.1185002771874)"><path d="M114 -180.3C149.6 -176.8 181.8 -150.2 218.2 -116.3C254.6 -82.3 295.3 -41.2 324.6 16.9C353.9 75 371.8 150 327.9 170.9C284 191.9 178.2 158.7 113.3 156C48.3 153.4 24.2 181.2 -18.7 213.5C-61.5 245.9 -123 282.7 -139.2 257.3C-155.5 231.8 -126.5 144 -118.7 90.8C-111 37.5 -124.5 18.8 -150.7 -15.1C-176.9 -49 -215.7 -98 -221.2 -147.4C-226.7 -196.7 -198.9 -246.5 -156.4 -246C-114 -245.5 -57 -194.7 -8.9 -179.3C39.2 -163.8 78.3 -183.7 114 -180.3" fill="#BB004B"></path></g></svg>`
        )}`;

    }

    handleSignOut() {
        document.cookie = 'userCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location = '/';
    }


    render(){

        const {user} = this.props;

        return(
            <div className='flex flex-col col-span-1 m-3 rounded-xl items-center p-2'
            style={{ backgroundImage: `url(${this.bg})` }}>
                <h1 className='text-4xl text-white mt-2 font-bold'>{user ? user.name : 'Loading User'}</h1>
                <div className='mt-4 bg-red-500 rounded-full h-40 w-40 bg-center bg-cover'
                style={{ backgroundImage: `url(${user ? user.pfp : ''})` }}></div>

                <div className='mt-auto mr-auto rounded-lg bg-[#ef5f67] hover:bg-[#d53767] p-2 cursor-pointer transition duration-200'
                onClick={this.handleSignOut}>Sign Out</div>
            </div>
        )
    }


}

export default ProfileSidebar;