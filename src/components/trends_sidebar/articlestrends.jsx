import {React, Component} from 'react';


//Class which is meant to represent each trending article
//
class ArticlesTrends extends Component {

    getTrendingArticles() {
        // Make logic here to get data from backend
      
        // This code is used for testing
        const trendingArticles = [
          { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
          { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
          { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
          { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
          { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" }
        ];
      
        // Generate HTML for each article
        const articleElements = trendingArticles.map((article, index) => (
          <div className="grid grid-cols-11 w-full h-14 hover:bg-gray-200 items-center cursor-pointer" key={index}>
            <div className="col-span-1">
              <h1 className="text-2xl">{index + 1}</h1>
            </div>
            <div className="col-span-10 flex">
              <h1 className="text-xl text-left">{article.title}</h1>
              <h1 className="mx-1 font-bold">&middot;</h1>
              <h1 className="mx-1 text-lg">{article.author}</h1>
            </div>
          </div>
        ));
      
        return articleElements;
      }
      


    render (){
        return(
            <div className="border border-t-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
                <h1 className="text-center text-xl font-bold ">Trending Articles</h1>
                {this.getTrendingArticles()}
            </div>
        )
    }
}

export default ArticlesTrends