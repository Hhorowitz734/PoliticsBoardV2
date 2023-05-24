import {React, Component} from 'react';
import {AiOutlineHeart} from "react-icons/ai"
import {BiShare} from "react-icons/bi"

class ArticleCard extends Component {


    render () {
        return (
            <div className="ml-2 h-1/3 md:h-64 lg:h-56 w-full border border-l-transparent border-t-transparent border-r-transparent flex overflow-hidden hover:bg-gray-200 transition duration-200 cursor-pointer">
                <div>
                    <div className="flex items-center">
                        <h1 className="text-2xl mt-2">What America Gets Wrong About Gender Medicine </h1>
                        <AiOutlineHeart className="m-2 mt-5 text-xl"/>
                        <BiShare className="m-2 mt-5 text-xl font-thin"/>
                    </div>
                    <div className="flex items-center">
                    <img src={"https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg"} alt="Your image" className="h-8 mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2 font-bold">John Doe</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <h1 className="mt-2">February 27, 2022</h1>
                        <h1 className="m-2 font-bold">&middot;</h1>
                        <div class="hidden md:flex">
                            <div class="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Transgender</h1></div>
                            <div class="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Civil Rights</h1></div>
                            <div class="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0"><h1>Dogknob</h1></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap md:hidden lg:m-0 my-2">
                        <div class="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Transgender</h1></div>
                        <div class="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0 lg:mr-2"><h1>Civil Rights</h1></div>
                        <div class="mx-1 w-fit bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300 mb-2 lg:mb-0"><h1>Dogknob</h1></div>
                    </div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                </div>
            </div>
        )
    
}

}

export default ArticleCard;