import React, {Component} from 'react';

import {BiLike, BiShare} from 'react-icons/bi';

import SingleArticleRetriever from '../components/middleware/singlearticleretriever';

import Navbar from '../components/navbar';
import CommentInput from '../components/comment_input';
import Comment from '../components/comment';
import PostVoting from '../components/postvoting';
import Tag from '../components/tag';

import Verifier from '../components/middleware/verifier';

class ViewArticle extends Component{

    constructor(props) {
        super(props);
        this.articleId = props.articleId;
        this.state = {
            article: null,
            comments: null,
            user: null
        }
    }

    async componentDidMount() { //Loads in article
        try {
            const article = await SingleArticleRetriever(this.articleId);
            this.setState({ article: article, comments: article.comments });
          } catch (error) {
            console.error('Error retrieving article:', error);
          }
        try {
            const user = await Verifier();
            this.setState({user: user})
        } catch (error) {
            console.error('Error retrieving user:', error);
        }
    }


    render() {

        const {article, comments, user} = this.state;

        return(
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <h1 className='w-full text-4xl font-bold text-center mt-4'>{article ? article.title : 'Loading...'}</h1>
                <div className='w-11/12 flex mt-4 mx-auto border-t border-b border-1 py-2'>
                    {user && <PostVoting postID = {this.articleId} userID = {user._id} currentAS = {article.affiliationScore}/>}
                    <div className='h-12 rounded-lg bg-gray-200 hover:bg-gray-400 cursor-pointer transition duration-200 flex items-center justify-center text-2xl w-12 ml-2'><BiLike /></div>
                    <div className='h-12 rounded-lg bg-gray-200 hover:bg-gray-400 cursor-pointer transition duration-200 flex items-center justify-center text-2xl w-12 ml-2'><BiShare /></div>
                    {article && 
                        <div className='rounded-lg flex bg-gray-200 h-12 items-center px-2 mx-2 ml-auto'>
                        {article.tags && article.tags.length > 0 && (
                                    article.tags.map((tag, index) => <Tag tagObject = {tag} key={index} />)
                            )}
                        </div>}
                </div>
                {article && <div className='w-11/12 mt-4 mx-auto border rounded-lg p-4' 
                dangerouslySetInnerHTML={{__html: article.articleData}}></div>}
                <CommentInput postID = {this.articleId} />
                {user && comments && comments.length > 0 ? (
                    comments.map((comment) => <Comment commentObject={comment} key={comment.id} postID = {this.articleId} userID = {user._id}/>)
                    ) : (
                    <h1 className='text-4xl font-bold text-center mt-8'>No Comments Yet.</h1>
                )}
                
            </div>
        )
    }
}

export default ViewArticle;