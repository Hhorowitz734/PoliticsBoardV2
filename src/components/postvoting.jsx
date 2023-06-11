import React, {Component} from "react";

import PostVoteAdder from "./middleware/post_vote_adder";
import ScoreUpdateTicker from "./affiliation_voting_ticker";

class PostVoting extends Component{

    constructor(props) {
        super(props);

        this.postID = props.postID;
        this.userID = props.userID;
        const affiliationScore = props.currentAS;

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
        const result = await PostVoteAdder(this.postID, this.userID, voteValue);
        const updatedAffiliationScore = result.newAS;
        console.log(updatedAffiliationScore)
        this.setState({bgColor : `rgba(${Math.round((1 - updatedAffiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(updatedAffiliationScore)) * 127.5)}, ${Math.round((1 + updatedAffiliationScore) * 127.5)}, .5)`,})
    }



    render() {

        const {bgColor} = this.state;

        const updateAffiliationScoreCallback = (voteValue) => {
            Object.entries(this.state.scoreUpdateRefs).forEach(([key, ref]) => {
                if (key != voteValue) {
                    ref.current.handleUnselected();
                }
            })
            this.updateAffiliationScore(voteValue);
        }

        return(
            <div className='w-full flex justify-center'>
                <div className='h-12 rounded-lg flex mt-2 px-1' style={{ backgroundColor: bgColor }}>
                    <ScoreUpdateTicker contentType = {'post'} postCallback = {updateAffiliationScoreCallback} scoreUpdate = {1}
                    ref={this.state.scoreUpdateRefs[1]} />
                    <ScoreUpdateTicker contentType = {'post'} postCallback = {updateAffiliationScoreCallback} scoreUpdate = {.5}
                    ref={this.state.scoreUpdateRefs[.5]} />
                    <ScoreUpdateTicker contentType = {'post'} postCallback = {updateAffiliationScoreCallback} scoreUpdate = {0}
                    ref={this.state.scoreUpdateRefs[0]} />
                    <ScoreUpdateTicker contentType = {'post'} postCallback = {updateAffiliationScoreCallback} scoreUpdate = {-.5}
                    ref={this.state.scoreUpdateRefs[-.5]} />
                    <ScoreUpdateTicker contentType = {'post'} postCallback = {updateAffiliationScoreCallback} scoreUpdate = {-1}
                    ref={this.state.scoreUpdateRefs[-1]} />
                </div>
            </div>
        )
    }
}

export default PostVoting;