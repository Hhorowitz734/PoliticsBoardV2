import React, { Component } from 'react';

class NavButton extends Component {

    render() {
      const { text, onClick } = this.props;
  
      return (

        <div
          className="mr-3 bg-onyx text-white rounded-lg w-32 py-1 bg-opacity-70 hover:bg-opacity-100 cursor-pointer transition duration-150 items-center text-center hover:shadow-sm hover:shadow-onyx"
          onClick={onClick}
        >
          {text}
        </div>

      );
    }
  }
  

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        height: 'h-14',
        width: 'w-[93%]'
        };
        this.pop = this.pop.bind(this);
    }

    pop() {
        this.setState({ height: 'h-16' });
        this.setState({ width: 'w-[94%]'})

        setTimeout(() => {
        this.setState({ height: 'h-14' });
        this.setState({ width: 'w-[93%]' })
        }, 30); // Adjust the duration as desired
    }

    render() {
        const { height, width } = this.state;
        const navbarClassName = `${width} ${height} bg-white rounded-2xl opacity-50 hover:opacity-100 hover:bg-opacity-70 hover:shadow-xl shadow-lg shadow-onyx`;

        return (
        <div className="flex items-center justify-center fixed w-screen mt-5">
            <div
            className={navbarClassName}
            onClick={this.pop}
            >
            <div className="flex items-center justify-between h-full mx-auto">
                <h1 className="ml-5 text-lg">PoliticsBoard</h1>
                <div className="flex">
                <NavButton text="Register" />
                <NavButton text="Log In" />
                </div>
            </div>
            </div>
        </div>
        );
    }
}
  

  

export default Navbar;
