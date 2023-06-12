import React, {Component} from 'react';

import FeedRetriever from '../middleware/feedretriever';

//Class which is meant to represent each trending article
class Article extends Component {

  constructor(props){
      super(props);
      this.articleObject = props.articleObject;
      this.position = props.position;

      const affiliationScore = this.articleObject.affiliationScore;
      this.bgColor = `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, `;

      this.normalOpacity = `.3)`;
      this.hoverOpacity = `.5)`;

      this.state = {
        fullColor: this.bgColor + this.normalOpacity,
      }

  }

  handleMouseEnter = () => {
    this.setState({fullColor: `${this.bgColor}${this.hoverOpacity}`}) 
  };

  handleMouseLeave = () => {
    this.setState({fullColor: `${this.bgColor}${this.normalOpacity}`}) 
  };

  render() {

    const {fullColor} = this.state;

    return (
      <div data-testid='trending-article-component' className="grid grid-cols-11 w-full h-14 items-center cursor-pointer transition px-2 rounded-lg mt-1" key={this.position}
      style = {{backgroundColor: fullColor}}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      onClick = {() => window.location = `/article/${this.articleObject._id}`}
      >
            <div className="col-span-1">
              <h1 className="text-2xl">{this.position}</h1>
            </div>
            <div className="col-span-10 flex overflow-hidden items-center">
              <h1 className="text-xl text-left overflow-hidden">{this.articleObject.title}</h1>
              <h1 className="mx-1 font-bold">&middot;</h1>
              <h1 className="mx-1 text-lg">{this.articleObject.userName}</h1>
            </div>
          </div>
    )
  }

}



class ArticlesTrends extends Component {

  constructor(props){
    super(props);

    this.state = {
      articles: null,
    }
  }

  async componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      const articlesFeed = await FeedRetriever();
      this.setState({articles : articlesFeed})
    } else {
      this.setState({articles: this.props.articles})
    }
  }
      


    render (){

      const {articles} = this.state;

        return(
            <div className="border border-t-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
                <h1 className="text-center text-xl font-bold ">Trending Articles</h1>
                {articles && articles.map((article, index) => (
                    <Article articleObject={article} position={index + 1} key = {index} />
                ))}
            </div>
        )
    }
}

export default ArticlesTrends