import React, {Component} from 'react';

import CommentVoteAdder from './middleware/comment_vote_adder';
import ScoreUpdateTicker from './affiliation_voting_ticker';

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
            scoreUpdateRefs: {
                [-1]: React.createRef(),
                [-.5]: React.createRef(),
                [0]: React.createRef(),
                [.5]: React.createRef(),
                [1]: React.createRef()
            }
        }
    }

    async updateAffiliationScore(voteValue) {
        const result = await CommentVoteAdder(this.postID, this.commentObject._id, voteValue, this.userID);
        const updatedAffiliationScore = result.newAS;
        console.log(updatedAffiliationScore)
        this.setState({bgColor : `rgba(${Math.round((1 - updatedAffiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(updatedAffiliationScore)) * 127.5)}, ${Math.round((1 + updatedAffiliationScore) * 127.5)}, .5)`,})
    }


    comment_voting_system = () => {

        const updateAffiliationScoreCallback = (voteValue) => {
            Object.entries(this.state.scoreUpdateRefs).forEach(([key, ref]) => {
                if (key != voteValue) {
                    ref.current.handleUnselected();
                }
            })
            this.updateAffiliationScore(voteValue);

        }


        return(
            <div className='w-13 h-100 overflow-hidden bg-white rounded-lg py-1 px-2'>
                <ScoreUpdateTicker contentType = {'comment'} commentCallback = {updateAffiliationScoreCallback} scoreUpdate = {1}
                ref={this.state.scoreUpdateRefs[1]} />
                <ScoreUpdateTicker contentType = {'comment'} commentCallback = {updateAffiliationScoreCallback} scoreUpdate = {.5}
                ref={this.state.scoreUpdateRefs[.5]} />
                <ScoreUpdateTicker contentType = {'comment'} commentCallback = {updateAffiliationScoreCallback} scoreUpdate = {0}
                ref={this.state.scoreUpdateRefs[0]} />
                <ScoreUpdateTicker contentType = {'comment'} commentCallback = {updateAffiliationScoreCallback} scoreUpdate = {-.5}
                ref={this.state.scoreUpdateRefs[-.5]} />
                <ScoreUpdateTicker contentType = {'comment'} commentCallback = {updateAffiliationScoreCallback} scoreUpdate = {-1}
                ref={this.state.scoreUpdateRefs[-1]}/>
            </div>
        )
    }

    render() {

        const {bgColor} = this.state;

        return(
            <div className='mt-4 w-11/12 h-32 mx-auto rounded-lg items-center p-2 overflow-y-scroll flex'
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