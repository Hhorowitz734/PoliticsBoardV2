import React, {Component} from 'react';
import {AiOutlineHeart} from "react-icons/ai"


class User extends Component {

    constructor(props){
        super(props);
        this.trendObject = props.userObject;
        this.position = props.position;
    }


    render() {
        return (
            <div data-testid='trending-user-component' className="grid grid-cols-11 w-full h-14 hover:bg-gray-200 items-center cursor-pointer" key = {this.position}>
                <div className="col-span-1">
                    <h1 className="text-2xl">{this.position}</h1>
                </div>
                <div className="col-span-10 flex">
                <img src={this.trendObject.img} alt="Your image" className="h-8 mr-1 rounded-full" style={{ borderRadius: "50%" }} />
                    <h1 className="text-xl text-left">{this.trendObject.name}</h1>
                    <h1 className="mx-1 font-bold">&middot;</h1>
                    <h1 className="mx-1 text-lg">{this.trendObject.score}</h1>
                    <AiOutlineHeart className="mt-2"/>
    
                </div>
            </div>
        );
    }
}

class UsersTrends extends Component {


    constructor(props){
        super(props);

        //passes trending user objects to UsersTrends so it can be mapped to users
        //also establishes a path for testing vs development (to be standardized later)
        if (process.env.NODE_ENV === 'development') {
            this.usersTest = [
              { name: "Benjamin Horowitz", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 32000 },
              { name: "John Doe", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 30000 },
              { name: "Zubayer Jones", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 27000 },
              { name: "Chad Chadson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 5000 },
              { name: "Mario Jakeson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 3000 }
            ];
          } else {
            this.usersTest = props.trendingUsers; //Replace 'usersTest' with more useful variable name in the future
          }
          
          
    }

    render() {
        return(
            <div className="mt-2 border border-b-transparent border-l-transparent border-r-transparent overflow-y-scroll h-fit max-h-[33vh]">
                <h1 className="text-center text-xl font-bold">Trending Users</h1>
                {this.usersTest.map((user, index) => (
                    <User userObject={user} position={index + 1} key = {index} />
                ))}
            </div>
        )
    }
}

export default UsersTrends;