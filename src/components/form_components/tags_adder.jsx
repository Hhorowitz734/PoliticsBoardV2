import React, {Component} from "react";

import Tag from "../tag";

import TagRetriever from "../middleware/tagretriever";


class TagAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allTags: null,
        }
    }

    async componentDidMount() {
        try {
            const retrievedTags = await TagRetriever();
            this.setState({ allTags: retrievedTags.reverse() });
            console.log(this.state.allTags);
        } catch (error) {
            console.log(error);
        }
    }


    render() {

        const {allTags} = this.state;

        return (
            <div className="mt-8 w-2/3 h-64 bg-gray-200 p-2">
                <h1 className="text-center text-2xl">Tag Your Post</h1>
                <div className="flex flex-grow bg-white rounded-lg w-full h-3/4 m-auto overflow-y-scroll overflow-x-hidden">
                    <div className="flex flex-wrap">
                        {allTags && allTags.map((tag) => (
                            <Tag tagObject={tag} key={tag._id} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TagAdder;