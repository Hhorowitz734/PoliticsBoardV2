import React, { Component } from "react";

class Toggle extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            toggled: false
        }

        this.setToggle = this.setToggle.bind(this);
    }

    setToggle() { //Sets toggle to opposite state
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }));
    }

    render() {

        const { toggled } = this.state;

        return (
            <div className="flex h-18 items-center">
                <h1 className="text-2xl mr-5">Post Anonymously?</h1>
                <div className={`w-20 h-8 rounded-2xl px-1 items-center flex cursor-pointer ${toggled ? 'bg-blue-500' : 'bg-gray-500'} transition duration-300`} onClick={this.setToggle}>
                    <div className={` w-6 h-6 rounded-full ${toggled ? 'ml-auto bg-white' : 'mr-auto bg-black'} transition duration-300`}></div>
                </div>
            </div>
        )
    }
}


export default Toggle;