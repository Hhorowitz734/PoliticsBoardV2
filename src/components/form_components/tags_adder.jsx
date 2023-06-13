import React, {Component} from "react";

import Tag from "../tag";

import TagRetriever from "../middleware/tagretriever";


class TagAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allTags: null,
            selectedTags: []
        }
    }

    async componentDidMount() {
        try {
            const retrievedTags = await TagRetriever();
            this.setState({ allTags: retrievedTags.reverse() });
        } catch (error) {
            console.log(error);
        }
    }

    addOrRemoveTag(newTag) {

        const { selectedTags } = this.state;
        const selectedTagExists = selectedTags.some(tag => JSON.stringify(tag) === JSON.stringify(newTag));
        
        if (selectedTagExists) {
          // Tag exists in selectedTags, so remove it
          const updatedTags = selectedTags.filter(tag => JSON.stringify(tag) !== JSON.stringify(newTag));
          this.setState({ selectedTags: updatedTags });
          return true;
        } else if (selectedTags.length < 3) {
          // Tag doesn't exist in selectedTags, so add it
          const updatedTags = [...selectedTags, newTag];
          this.setState({ selectedTags: updatedTags });
          return true
        } else {
            return false //Returns true or false, based on if the tag went into the list
        }

      }      
    


    render() {

        const {allTags, selectedTags} = this.state;

        return (
            <div className="mt-8 w-2/3 h-96 bg-gray-200 p-2 rounded-lg">
                <h1 className="text-center text-2xl mb-2">Tag Your Post</h1>
                <div className="flex flex-grow bg-white rounded-lg w-full h-3/4 m-auto overflow-y-scroll overflow-x-hidden">
                    <div className="flex flex-wrap">
                        {allTags && allTags.map((tag) => (
                            <Tag tagObject={tag} inForm = {true} tagListSetCallback = {(nTag) => this.addOrRemoveTag(nTag)} key={tag._id} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-grow mt-4 bg-white rounded-lg w-full h-8 m-auto overflow-x-scroll overflow-y-hidden">
                    {selectedTags && selectedTags.map((tag) => (
                            <Tag tagObject={tag} inForm = {true} tagListSetCallback = {(nTag) => this.addOrRemoveTag(nTag)} key={tag._id} />
                        ))}
                </div>
            </div>
        )
    }
}

export default TagAdder;