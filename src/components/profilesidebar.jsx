import React, {Component} from 'react';

class ProfileSidebar extends Component {
    
    constructor(props){
        super(props);

        this.userPosts = props.userPosts;
        this.averageAffiliationScore = 0;

        if (this.userPosts.length > 0){
            let totalScore = this.userPosts.reduce((sum, post) => sum + post.affiliationScore, 0);
            this.averageAffiliationScore = totalScore / this.userPosts.length;
        }

        this.bg = `rgba(${Math.round((1 - this.averageAffiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(this.averageAffiliationScore)) * 127.5)}, ${Math.round((1 + this.averageAffiliationScore) * 127.5)}, .5) `

    }

    handleSignOut() {
        document.cookie = 'userCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location = '/';
    }


    render(){

        const {user} = this.props;

        return(
            <div className='flex flex-col col-span-1 m-3 rounded-xl items-center p-2'
            style={{ backgroundColor: this.bg }}>
                <h1 className='text-4xl mt-2 font-bold'>{user ? user.name : 'Loading User'}</h1>
                <div className='mt-4 bg-red-500 rounded-full h-40 w-40 bg-center bg-cover'
                style={{ backgroundImage: `url(${user ? user.pfp : ''})` }}></div>
                <div className='w-11/12 h-2/4 m-auto rounded-lg bg-white bg-opacity-50'></div>

                <div className='mt-auto mr-auto rounded-lg bg-[#ef5f67] hover:bg-[#d53767] p-2 cursor-pointer transition duration-200'
                onClick={this.handleSignOut}>Sign Out</div>
            </div>
        )
    }


}

export default ProfileSidebar;