import {React, Component} from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {BiShare} from "react-icons/bi";

import PostLiker from './middleware/post_liker';

import Tag from './tag';

class ArticleCard extends Component {

    constructor(props) {
        super(props);

        this.id = props.articleObject._id;
        this.title = props.articleObject.title;
        this.article = props.articleObject.articleData;
        this.date = new Date(props.articleObject.dateTimePosted).toLocaleDateString();
        this.name = props.articleObject.userName;
        this.user = {
            pfp: props.articleObject.userPic,
            likes: props.userLikes,
            id: props.userID
        }

        this.tags = props.articleObject.tags;

        const affiliationScore = props.articleObject.affiliationScore;

        this.baseColor = `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, `

        this.state = {
            bgOpacity: `.3)`,
            isLiked: false,
        }
    }

    handleMouseEnter = (e) => {
        this.setState({bgOpacity : `.5)`});
      };
    
    handleMouseLeave = (e) => {
       this.setState({bgOpacity: `.3)`})
    };

    componentDidMount() {
        for (let like of this.user.likes) {
            if (this.id === like) {
                this.setState({isLiked : true})
            }
        }
    }

    likePost = async (e) => {

        e.stopPropagation();

        const increment = this.state.isLiked ? -1 : 1;
        PostLiker(this.id, this.user.id, increment);
        this.setState({isLiked : !this.state.isLiked});
      }

    copyToClipboard = (e) => {

        e.stopPropagation();
        
        const currentURL = window.location.href + `article/${this.id}`;
        navigator.clipboard.writeText(currentURL);
    }

    render () {

        const {bgOpacity, isLiked} = this.state;

        return (
            <div className="m-1 h-1/3 md:h-64 lg:h-56 w-full rounded-lg border border-l-transparent border-t-transparent border-r-transparent flex overflow-hidden transition  cursor-pointer px-2"
            style={{ backgroundColor: this.baseColor + bgOpacity }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick = {(e) => {window.location = `/article/${this.id}`}}>
                <div className='w-full'>
                    <div className="flex w-full items-center">
                        <h1 className="text-2xl mt-2 overflow-x-hidden">{this.title}</h1>
                        <div className='flex ml-auto'>
                            <div className={`h-8 rounded-lg ${isLiked ? 'bg-emerald-500' : 'bg-gray-200'} hover:bg-gray-400 bg-opacity-40 cursor-pointer transition duration-100 flex items-center justify-center text-2xl w-8 ml-2`}
                            onClick = {this.likePost}><AiOutlineHeart /></div>
                            <div className={`h-8 rounded-lg bg-gray-200 hover:bg-gray-400 bg-opacity-40 cursor-pointer transition duration-100 flex items-center justify-center text-2xl w-8 ml-2`}
                            onClick = {this.copyToClipboard}><BiShare /></div>
                        </div>
                    </div>
                    <div className="flex items-center h-8 my-1">
                        <img src={this.user.pfp} alt="Your image" className="h-8 w-8 bg-cover mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                            <h1 className="mx-2 font-bold">&middot;</h1>
                            <h1 className="font-bold">{this.name}</h1>
                            <h1 className="mx-2 font-bold">&middot;</h1>
                            <h1 className="">{this.date}</h1>
                            {this.tags.length > 0 && <h1 className="mx-2 first-letter:font-bold">&middot;</h1>}
                            <div className="hidden md:flex">
                            {this.tags && this.tags.length > 0 && (
                                    this.tags.map((tag, index) => <Tag tagObject = {tag} key={index} />)
                            )}
                            </div>
                            
                    </div>
                        <div className="flex flex-wrap md:hidden lg:m-0 my-2">
                            {this.tags && this.tags.length > 0 && (
                                this.tags.map((tag, index) => <Tag tagObject = {tag} key={index} />)
                            )}
                        </div>
                    <h1 className = 'overflow-y-hidden' dangerouslySetInnerHTML={{__html: this.article}}></h1>
                </div>
            </div>
        )
    
}

}

export default ArticleCard;