import React, {Component} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import Verifier from './middleware/verifier';
import CommentAdder from './middleware/comment_adder';

class CommentInput extends Component {

    constructor(props){
        super(props);

        this.postID = props.postID;

        this.editorConfig = { //CONFIGURES EDITOR SETTINGS
            // CKEditor configuration options
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
            resize_maxWidth: '50%',
            resize_maxHeight: '50%',
          };
        
        this.state = {
            user: null,
            commentText: 'hi',
        }
    }

    async componentDidMount() {
        try { //Loads in user if user exists
            const user = await Verifier();
            this.setState({user: user});
         } catch (error) {
            //Nothing here because user is sometimes not logged in 
         }
    }

    handleEditorChange = (event, editor) => {
        const newData = editor.getData();
        this.setState({commentText : newData})
    }

    handleCommentSubmit = () => {
        //Bundle comment info
        const comment = {
            text: this.state.commentText,
            user: this.state.user
        }

        CommentAdder(this.postID, comment); //Adds comment to DB

    }

    render() {

        const {user} = this.state;

        return (
            <div className='mt-8 w-11/12 h-28 mx-auto bg-gray-300 rounded-lg items-center p-2 overflow-y-scroll flex'>
              {user && (
                <>
                  <div className='bg-red-500 rounded-full h-14 w-14 bg-center bg-cover overflow-hidden' style={{ backgroundImage: `url(${user ? user.pfp : ''})` }}></div>
                  <div className='h-18 w-11/12 rounded-lg mx-auto px-4 overflow-hidden'>
                    <div className='overflow-y-scroll h-full w-full rounded-lg'>
                      <CKEditor
                        editor={ClassicEditor}
                        data=''
                        config={this.editorConfig}
                        onReady={(editor) => {
                          editor.ui.view.editable.element.style.height = '100%';
                        }}
                        onChange={this.handleEditorChange}
                      />
                    </div>
                  </div>
                  <div className='h-8 bg-red-400 hover:bg-emerald-400 rounded-lg items-center justify-center flex p-2 font-bold cursor-pointer transition duration-200'
                  onClick = {this.handleCommentSubmit}>Submit</div>
                </>
              )}
              {!user && (
                <div className='h-18 w-11/12 text-2xl pl-4'>
                  Please <span className='underline cursor-pointer' onClick={() => window.location = '/login'}>log in</span> to make a comment and vote on this post.
                </div>
              )}
            </div>
          );          
    }

    
}

export default CommentInput;