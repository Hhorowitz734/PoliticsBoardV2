import React, {Component} from 'react';

class Tag extends Component{

    constructor(props) {
        super(props);

        this.normalOpacity = "0.3)";
        this.hoverOpacity = "0.5)";

        this.topic = props.tagObject.topic;
        this.color = props.tagObject.color;
        if (!this.color) {
            this.color = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, `
            this.topic = 'Tag'
        }

    }

    handleMouseEnter = (e) => {
        e.target.style.backgroundColor = `${this.color}${this.hoverOpacity}`;
      };
    
      handleMouseLeave = (e) => {
        e.target.style.backgroundColor = `${this.color}${this.normalOpacity}`;
      };


    render() {
        return (
            <div data-testid='trending-tag-component'>
                <h1
                className="w-fit m-1 px-1 border border-transparent rounded-lg cursor-pointer"
                style = {{backgroundColor: `${this.color}${this.normalOpacity}`}}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                >{this.topic}</h1>
            </div>
        )
    }
}

export default Tag;