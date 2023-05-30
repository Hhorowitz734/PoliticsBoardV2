import {React, Component} from 'react';
import {AiOutlineHeart} from "react-icons/ai"
import {BiShare} from "react-icons/bi"

class ArticleCard extends Component {

    constructor(props) {
        super(props);

        this.title = props.articleObject.title;
        this.article = props.articleObject.articleData;
        this.date = new Date(props.articleObject.dateTimePosted).toLocaleDateString();
        this.name = props.articleObject.userName;
        this.pfp = props.articleObject.userPic;
    }

    render () {
        return (
            <div className="ml-2 h-1/3 md:h-64 lg:h-56 w-full border border-l-transparent border-t-transparent border-r-transparent flex overflow-hidden hover:bg-gray-200 transition duration-200 cursor-pointer px-2">
                <div>
                    <div className="flex items-center">
                        <h1 className="text-2xl mt-2">{this.title}</h1>
                        <AiOutlineHeart className="m-2 mt-5 text-xl"/>
                        <BiShare className="m-2 mt-5 text-xl font-thin"/>
                    </div>
                    <div className="flex items-center">
                    <img src={"https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg"} alt="Your image" className="h-8 mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2 font-bold">{this.name}</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2">{this.date}</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <div className="hidden md:flex">
                            <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Transgender</h1></div>
                            <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Civil Rights</h1></div>
                            <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0"><h1>Dogknob</h1></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:hidden lg:m-0 my-2">
                        <div className="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Transgender</h1></div>
                        <div className="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Civil Rights</h1></div>
                        <div className="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0"><h1>Dogknob</h1></div>
                    </div>
                    <h1>{this.article}</h1>
                </div>
            </div>
        )
    
}

}

export default ArticleCard;