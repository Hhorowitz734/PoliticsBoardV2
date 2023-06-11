import React, {Component} from "react";

import PostVoteAdder from "./middleware/post_vote_adder";

class PostVoting extends Component{

    constructor(props) {
        super(props);

        this.postID = props.postID;
        this.userID = props.userID;
        const affiliationScore = props.currentAS;

        this.state = {
            bgColor: `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, .5)`
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

        return(
            <div className='w-full flex justify-center'>
                <div className='h-12 rounded-lg flex mt-2 px-1' style={{ backgroundColor: bgColor }}>
                        <div className='w-full flex items-center mx-1'><div className='rounded-full h-5 w-5 bg-[#5e21ff] hover:bg-[#360ea5] cursor-pointer'
                        onClick={() => this.updateAffiliationScore(1)}></div></div>
                        <div className='w-full flex items-center mx-1'><div className='rounded-full h-5 w-5 bg-[#60a5fa] hover:bg-[#2b66af] cursor-pointer'
                        onClick={() => this.updateAffiliationScore(.5)}></div></div>
                         <div className='w-full flex items-center mx-1'><div className='rounded-full h-5 w-5 bg-[#7c8692] hover:bg-[#2c3036] cursor-pointer'
                        onClick={() => this.updateAffiliationScore(0)}></div></div>
                        <div className='w-full flex items-center mx-1'><div className='rounded-full h-5 w-5 bg-[#fa7269] hover:bg-[#5d2723] cursor-pointer'
                        onClick={() => this.updateAffiliationScore(-.5)}></div></div>
                        <div className='w-full flex items-center mx-1'><div className='rounded-full h-5 w-5 bg-[#d53767] hover:bg-[#73253d] cursor-pointer'
                        onClick={() => this.updateAffiliationScore(-1)}></div></div>
                </div>
            </div>
        )
    }
}

export default PostVoting;