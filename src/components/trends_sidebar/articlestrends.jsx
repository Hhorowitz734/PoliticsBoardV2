import React, {Component} from 'react';


//Class which is meant to represent each trending article
class Article extends Component {

  constructor(props){
      super(props);
      this.articleObject = props.articleObject;
      this.position = props.position;

  }

  render() {
    return (
      <div data-testid='trending-article-component' className="grid grid-cols-11 w-full h-14 hover:bg-gray-200 items-center cursor-pointer" key={this.position}>
            <div className="col-span-1">
              <h1 className="text-2xl">{this.position}</h1>
            </div>
            <div className="col-span-10 flex">
              <h1 className="text-xl text-left">{this.articleObject.title}</h1>
              <h1 className="mx-1 font-bold">&middot;</h1>
              <h1 className="mx-1 text-lg">{this.articleObject.author}</h1>
            </div>
          </div>
    )
  }

}



class ArticlesTrends extends Component {

  constructor(props){
    super(props);

    
    //establishes a path for testing vs development (to be standardized later)
    if (process.env.NODE_ENV === 'development') {
      this.articles = [
        {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
        {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
        {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
        {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
        {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"}
      ];
    } else {
      this.articles = props.articles; 
    }
  }
      


    render (){
        return(
            <div className="border border-t-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
                <h1 className="text-center text-xl font-bold ">Trending Articles</h1>
                {this.articles.map((article, index) => (
                    <Article articleObject={article} position={index + 1} key = {index} />
                ))}
            </div>
        )
    }
}

export default ArticlesTrends