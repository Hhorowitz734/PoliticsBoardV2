import React, {Component} from 'react';

import SingleArticleRetriever from '../components/middleware/singlearticleretriever';

import Navbar from '../components/navbar';
import CommentInput from '../components/comment_input';
import Comment from '../components/comment';

class ViewArticle extends Component{

    constructor(props) {
        super(props);
        this.articleId = props.articleId;
        this.state = {
            article: null,
            comments: null
        }
    }

    async componentDidMount() { //Loads in article
        try {
            const article = await SingleArticleRetriever(this.articleId);
            this.setState({ article: article, comments: article.comments });
          } catch (error) {
            console.error('Error retrieving article:', error);
          }
    }


    render() {

        const {article, comments} = this.state;

        return(
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <h1 className='w-full text-4xl text-center mt-4'>{article ? article.title : 'Loading...'}</h1>
                {article && <div className='w-11/12 mt-4 mx-auto border rounded-lg p-4' 
                dangerouslySetInnerHTML={{__html: article.articleData}}></div>}
                <CommentInput postID = {this.articleId} />
                {article && comments && comments.length > 0 ? (
                    comments.map((comment) => <Comment commentObject={comment} key={comment.id} postID = {this.articleId} />)
                    ) : (
                    <h1 className='text-4xl font-bold text-center mt-8'>No Comments Yet.</h1>
                )}
                
            </div>
        )
    }
}

export default ViewArticle;