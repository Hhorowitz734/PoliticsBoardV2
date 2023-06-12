import React, {Component} from 'react';

import Tag from './tag';

import SingleArticleRetriever from './middleware/singlearticleretriever';

class LikedPost extends Component {

    constructor(props){
        super(props);

        this.postID = props.postID;

        this.state = {
            article: null,
            baseColor: '',
            bgOpacity: `.3)`,
        }
    }

    async componentDidMount() {
        try {
            const article = await SingleArticleRetriever(this.postID);
            this.setState({ article: article });
            const affiliationScore = article.affiliationScore;
            this.setState({baseColor : `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, `})

        } catch (error) {
            console.error('Error retrieving article:', error);
        }
    }

    handleMouseEnter = (e) => {
        this.setState({bgOpacity : `.5)`});
      };
    
    handleMouseLeave = (e) => {
       this.setState({bgOpacity: `.3)`})
    };

    render() {

        const {article, baseColor, bgOpacity} = this.state;

        return(
            <div className='w-full rounded-lg overflow-hidden bg-gray-200 h-16 my-1 p-1 cursor-pointer'
            style={{ backgroundColor: baseColor + bgOpacity }}
            onMouseEnter = {this.handleMouseEnter}
            onMouseLeave = {this.handleMouseLeave}
            onClick = {() => window.location = `/article/${article._id}`}
            >
                {article && <h1 className='font-bold w-full text-center h-6 overflow-y-hidden'>{article.title}</h1>}
                <div className='w-full h-8 overflow-y-hidden flex rounded-lg items-center justify-between'>
                    {article && article.tags.length > 1 && (
                        article.tags.slice(0, 2).map((tag, index) => <Tag tagObject={tag} key={index} />)
                    )}
                    {article && article.tags.length === 1 && (
                        <Tag tagObject = {article.tags[0]} key = {1} />
                    )}
                    {article && article.tags.length === 0 && (
                        <div className='flex w-full items-center justify-center'>
                            <h1 className='text-md font-bold bg-gray-400 rounded-lg px-2'>No tags</h1>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

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
            <div className='flex flex-col col-span-1 m-3 rounded-xl items-center p-2 h-[88%]'
            style={{ backgroundColor: this.bg }}>
                <h1 className='text-4xl mt-2 font-bold'>{user ? user.name : 'Loading User'}</h1>
                <div className='mt-4 bg-red-500 rounded-full h-40 w-40 bg-center bg-cover'
                style={{ backgroundImage: `url(${user ? user.pfp : ''})` }}></div>
                <div className='w-11/12 h-2/4 m-auto rounded-lg bg-white bg-opacity-50 px-1 overflow-y-scroll'>
                    <h1 className='font-bold text-xl text-center'>Liked Posts</h1>
                    {user && user.likedIDs.length > 0 ? (
                        user.likedIDs.map((articleID, index) => <LikedPost postID = {articleID} key = {index} />)
                        ) : (
                        <h1 className='text-2xl font-bold'>No liked posts.</h1>
                    )}
                </div>

                <div className='mt-auto mr-auto rounded-lg bg-[#ef5f67] hover:bg-[#d53767] p-2 cursor-pointer transition duration-200'
                onClick={this.handleSignOut}>Sign Out</div>
            </div>
        )
    }


}

export default ProfileSidebar;