import React, {Component} from 'react';

class Tag extends Component{

    constructor(props) {
        super(props);


        this.normalOpacity = "0.3)";
        this.hoverOpacity = "0.5)";
        this.selectedOpacity = "0.7)";

        this.topic = props.tagObject.topic;
        this.color = props.tagObject.color;

        this.inForm = props.inForm;
        this.tagListSetCallback = props.tagListSetCallback; //Callback to set the list of tags for a form

        this.state = {
            isSelected: false //Property for forms where tags can be selected
        }

    }

    handleMouseEnter = (e) => {
        e.target.style.backgroundColor = `${this.color}${this.hoverOpacity}`;
      };
    
    handleMouseLeave = (e) => {
        if (!this.state.isSelected){
            e.target.style.backgroundColor = `${this.color}${this.normalOpacity}`;
        } else {
            e.target.style.backgroundColor = `${this.color}${this.selectedOpacity}`;
        }
    };

    handleOnClick = () => {

        if (this.inForm) { //Handles case that this tag is in a form
            const didGoIn = this.tagListSetCallback({topic: this.topic, color: this.color})
            if (didGoIn){ //False if item wasn't added to list
                this.setState({isSelected : !this.state.isSelected})
            }
        } else { //Handles case that this tag is not in a form

        }
    }

    render() {

        const {isSelected} = this.state;

        return (
            <div data-testid='trending-tag-component'>
                <h1
                className="w-fit m-1 px-1 border border-transparent rounded-lg cursor-pointer"
                style = {{backgroundColor: `${this.color}${isSelected ? this.selectedOpacity : this.normalOpacity}`}}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleOnClick}
                >{this.topic}</h1>
            </div>
        )
    }
}

Tag.defaultProps = {
    inForm: false
};

export default Tag;