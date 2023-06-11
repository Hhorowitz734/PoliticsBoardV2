import React, {Component} from 'react';

class ScoreUpdateTicker extends Component {

    constructor(props) {
        super(props);

        this.contentType = props.contentType; //Can be 'comment' or 'post'

        this.commentCallback = props.commentCallback; //Callbacks to handle being on comment or on post
        this.postCallback = props.postCallback;

        this.scoreUpdate = props.scoreUpdate;
        
        switch (this.scoreUpdate) {
            case 1:
              this.bgColor = '#5e21ff';
              this.selectedColor = '#360ea5';
              break;
            case 0.5:
              this.bgColor = '#60a5fa';
              this.selectedColor = '#2b66af';
              break;
            case 0:
              this.bgColor = '#7c8692';
              this.selectedColor = '#2c3036';
              break;
            case -0.5:
              this.bgColor = '#fa7269';
              this.selectedColor = '#5d2723';
              break;
            case -1:
              this.bgColor = '#d53767';
              this.selectedColor = '#73253d';
              break;
            default:
              // Add default code here if none of the cases match
              break;
          }          

        this.state = {
            bgColor: this.bgColor
        }

    }

    async handleBtnClicked(vote) {
        if (this.contentType === 'comment') {
            this.commentCallback(vote);
        } else if (this.contentType == 'post'){
            this.postCallback(vote);
        }
        this.setState({bgColor: this.selectedColor});
    }

    handleUnselected() {
        this.setState({bgColor: this.bgColor})
    }

    render() {

        const {bgColor} = this.state;

        return(
            <div className='w-full flex items-center'><div className={`rounded-full h-5 w-5 hover:bg-[${this.selectedColor}] cursor-pointer transition duration-200 ${this.contentType === 'post' ? 'mx-1' : ''}`}
            style = {{backgroundColor: `${bgColor}`}}
            onClick={() => this.handleBtnClicked(this.scoreUpdate)}></div></div>
        )
    }

}

export default ScoreUpdateTicker;