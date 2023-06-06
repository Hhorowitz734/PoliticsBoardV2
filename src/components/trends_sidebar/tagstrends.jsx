import React, {Component} from 'react';
import Tag from '../tag';

class TagsTrends extends Component {

    constructor(props){
        super(props);

        //passes trending user objects to UsersTrends so it can be mapped to users
        //also establishes a path for testing vs development (to be standardized later)
        if (process.env.NODE_ENV === 'development') {
            this.tags = this.getTrendingTags();
          } else {
            this.tags = props.trendingTags; //Replace 'usersTest' with more useful variable name in the future
          }
          
          
    }

    getTrendingTags() {
        //Make logic here to get data from backend
        return [
            { topic: 'Transgender' },
            { topic: 'Politics' },
            { topic: 'Dogknob' },
            { topic: 'Technology' },
            { topic: 'Elections' },
            { topic: 'Campaign Finance' },
            { topic: 'Voting Rights' },
            { topic: 'Gerrymandering' },
            { topic: 'Supreme Court' },
            { topic: 'Foreign Policy' },
            { topic: 'Impeachment' },
            { topic: 'Executive Power' },
            { topic: 'National Security' },
            { topic: 'Economic Policy' },
            { topic: 'Healthcare Policy' },
            { topic: 'Immigration' },
            { topic: 'Climate Change' },
            { topic: 'Gun Control' },
            { topic: 'Taxes' },
            { topic: 'Social Security' },
            { topic: 'Labor' },
            { topic: 'Civil Rights' },
            { topic: 'Privacy' },
            { topic: 'Criminal Justice' },
            { topic: 'Education' }
            ]



    }

    render() {
        return (
            <div className="overflow-y-scroll h-full">
                <h1 className="text-center text-xl font-bold">Trending Tags</h1>
                <div className="flex flex-wrap h-full">
                    {this.tags.map((tag) => (
                        <Tag tagObject={tag} key={tag.tag} />
                    ))}
                </div>
            </div>
        )
    }
}

export default TagsTrends
