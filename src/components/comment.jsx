import React, {Component} from 'react';

import CommentVoteAdder from './middleware/comment_vote_adder';

class Comment extends Component {

    constructor(props) {
        super(props);

        this.commentObject = props.commentObject;

        this.postID = props.postID;

        this.userID = props.userID;

        this.updateCommentsCallback = props.updateCallback;

        const affiliationScore = this.commentObject.affiliationScore;

        this.state = {
            bgColor: `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, .5)`,
        }
    }

    async updateAffiliationScore(voteValue) {
        const result = await CommentVoteAdder(this.postID, this.commentObject._id, voteValue, this.userID);
        const updatedAffiliationScore = result.newAS;
        console.log(updatedAffiliationScore)
        this.setState({bgColor : `rgba(${Math.round((1 - updatedAffiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(updatedAffiliationScore)) * 127.5)}, ${Math.round((1 + updatedAffiliationScore) * 127.5)}, .5)`,})
    }

    comment_voting_system = () => {
        return(
            <div className='w-13 h-100 overflow-hidden bg-white rounded-lg py-1 px-2'>
                <div className='w-full flex items-center'><div className='rounded-full h-5 w-5 bg-[#5e21ff] hover:bg-[#360ea5] cursor-pointer'
                onClick={() => this.updateAffiliationScore(1)}></div>hi</div>
                <div className='w-full flex items-center'><div className='rounded-full h-5 w-5 bg-[#60a5fa] hover:bg-[#2b66af] cursor-pointer'
                onClick={() => this.updateAffiliationScore(.5)}></div>hi</div>
                <div className='w-full flex items-center'><div className='rounded-full h-5 w-5 bg-[#fa7269] hover:bg-[#5d2723] cursor-pointer'
                onClick={() => this.updateAffiliationScore(-.5)}></div>hi</div>
                <div className='w-full flex items-center'><div className='rounded-full h-5 w-5 bg-[#d53767] hover:bg-[#73253d] cursor-pointer'
                onClick={() => this.updateAffiliationScore(-1)}></div>hi</div>
            </div>
        )
    }

    render() {

        const {bgColor} = this.state;

        return(
            <div className='mt-4 w-11/12 h-28 mx-auto rounded-lg items-center p-2 overflow-y-scroll flex'
            style={{ backgroundColor: bgColor }}>
                <div className='rounded-full h-14 w-14 bg-center bg-cover overflow-hidden' style={{ backgroundImage: `url(${this.commentObject.user.pfp})` }}></div>
                <div className='h-full w-11/12 ml-4'>
                    <h1 className='text-xl font-bold'>{this.commentObject.user.name}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.commentObject.text}}></div>
                </div>
                {this.comment_voting_system()}
            </div>
        )
    }
}

export default Comment;