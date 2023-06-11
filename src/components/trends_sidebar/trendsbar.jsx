import {React, Component} from 'react';

import ArticlesTrends from './articlestrends';
import TagsTrends from './tagstrends';
import UsersTrends from './userstrends';

class TrendsBar extends Component {

    render() {
        return (
            <div className="px-3 py-2 border border-t-transparent col-span-1 border-b-transparent border-l-transparent border-r-transparent lg:block hidden">
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