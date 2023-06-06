import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);

        this.commentObject = props.commentObject


    }

    render() {
        return(
            <div className='mt-4 w-11/12 h-28 mx-auto bg-gray-300 rounded-lg items-center p-2 overflow-y-scroll flex'>
                <div className='rounded-full h-14 w-14 bg-center bg-cover overflow-hidden' style={{ backgroundImage: `url(${this.commentObject.user.pfp})` }}></div>
                    <div className='h-full w-11/12 ml-4'>
                        <h1 className='text-xl font-bold'>{this.commentObject.user.name}</h1>
                        <div dangerouslySetInnerHTML={{__html: this.commentObject.text}}></div>
                </div>
            </div>
        )
    }
}

export default Comment;