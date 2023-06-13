import React, {Component} from 'react';

import Navbar from '../components/navbar';
import ProfileSidebar from '../components/profilesidebar';
import ArticleCard from '../components/articlecard';

import SingleUserRetriever from '../components/middleware/singleuserretriever';
import UserFeedRetriever from '../components/middleware/userfeedretriever';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.userId = props.userId;
        this.state = {
            user: null,
            feed: null,
        }
    }

    async componentDidMount() { //Loads in user profile
        try {
            const user = await SingleUserRetriever(this.userId); //THIS DOESNT RETRIEVE A GIVEN BASED ON THIS, IT GETS IT FROM DA COKIE
            this.setState({ user })
          } catch (error) {
            console.error('Error retrieving user:', error);
          }
        this.fetchFeed()
    }

    async fetchFeed() {
        try {
          const retrievedFeed = await UserFeedRetriever(this.userId);
          this.setState({ feed: retrievedFeed.reverse() });
        } catch (error) {
          console.log(error);
        }
      }

    render() {

        const {user, feed} = this.state;
        
        return (
            <div className='flex flex-col w-full h-screen overflow-hidden'>
                <Navbar />
                <div className="flex-grow flex items-center justify-center overflow-y-hidden">
                    <div className="w-[95%] h-[93%] grid grid-cols-3 mx-auto border rounded-xl shadow-lg">
                        {feed && <ProfileSidebar user = {user} userPosts = {feed} />}
                        <div className='h-[90%] scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thin col-span-3 lg:col-span-2 border border-l-transparent border-t-transparent border-b-tranparent px-2 overflow-x-hidden overflow-y-scroll'>
                        {feed && feed.length > 0 ? (
                            feed.map((article, index) => <ArticleCard articleObject = {article} userID = {user._id} userLikes = {user.likedIDs} key={index} />)
                            ) : (
                            <h1 className='text-6xl font-bold'>No Posts Yet.</h1>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Profile;