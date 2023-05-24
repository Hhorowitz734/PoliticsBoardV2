import {React, Component} from 'react';

import ArticlesTrends from './articlestrends';
import TagsTrends from './tagstrends';
import UsersTrends from './userstrends';

class TrendsBar extends Component {

    render() {
        return (
            <div className="px-3 py-2 border border-t-transparent col-span-1 border-b-transparent border-l-transparent border-r-transparent lg:block hidden">
                <h1 className="text-center text-2xl mb-1 border border-l-transparent border-r-transparent border-t-transparent ">Trends</h1>
                <div className="h-1/4 w-full">
                    <ArticlesTrends />
                    <TagsTrends />
                    <UsersTrends />
                </div>
            </div>
        )
    }
}

export default TrendsBar