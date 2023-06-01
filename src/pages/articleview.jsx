import React, {Component} from 'react';

import SingleArticleRetriever from '../components/middleware/singlearticleretriever';

import Navbar from '../components/navbar';

class ViewArticle extends Component{

    constructor(props) {
        super(props);
        this.articleId = props.articleId;
        this.state = {
            article: null,
        }
    }

    async componentDidMount() { //Loads in article
        try {
            const article = await SingleArticleRetriever(this.articleId);
            this.setState({ article })
          } catch (error) {
            console.error('Error retrieving article:', error);
          }
    }



    render() {

        const {article} = this.state;
        console.log(article)

        return(
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <h1 className='w-full text-4xl text-center mt-4'>{article ? article.title : 'Loading...'}</h1>
                {article && <div className='w-11/12 mt-4 mx-auto border rounded-lg p-4' 
                dangerouslySetInnerHTML={{__html: article.articleData}}></div>}
            </div>
        )
    }
}

export default ViewArticle;