import {React, Component} from 'react';
import {AiOutlineHeart} from "react-icons/ai"
import {BiShare} from "react-icons/bi"

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
        }
        this.tags = props.articleObject.tags;

        const affiliationScore = props.articleObject.affiliationScore;
        this.bgColor = `rgba(${Math.round((1 - affiliationScore) * 127.5)}, ${Math.round((1 - Math.abs(affiliationScore)) * 127.5)}, ${Math.round((1 + affiliationScore) * 127.5)}, .5)`
    }

    render () {

        return (
            <div className="ml-2 h-1/3 md:h-64 lg:h-56 w-full border border-l-transparent border-t-transparent border-r-transparent flex overflow-hidden transition duration-200 cursor-pointer px-2"
            style={{ backgroundColor: this.bgColor }}
            onClick = {(e) => {window.location = `/article/${this.id}`}}>
                <div>
                    <div className="flex items-center">
                        <h1 className="text-2xl mt-2">{this.title}</h1>
                        <AiOutlineHeart className="m-2 mt-5 text-xl"/>
                        <BiShare className="m-2 mt-5 text-xl font-thin"/>
                    </div>
                    <div className="flex items-center">
                    <img src={this.user.pfp} alt="Your image" className="h-8 w-8 bg-cover mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2 font-bold">{this.name}</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2">{this.date}</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
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