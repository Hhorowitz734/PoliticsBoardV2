import React, { Component } from 'react';

class NavButton extends Component {

    render() {
      const { text, onClick } = this.props;
  
      return (

        <div
          className="mr-3 bg-onyx text-white rounded-lg w-32 py-1 bg-opacity-70 hover:bg-opacity-100 cursor-pointer transition duration-150 items-center text-center hover:shadow-sm hover:shadow-onyx"
          onClick={onClick}
        >
          <h1 className='font-sans'>{text}</h1>
        </div>

      );
    }
  }
  

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        height: 'h-14',
        width: 'w-[93%]',
        opacity: 'opacity-100',
        refreshState: 'Hold to refresh'
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown() {
        this.setState({
          height: 'h-16',
          width: 'w-[95%]',
          opacity: 'opacity-70',
          refreshState: 'Refreshing...'
        });
      }
    
      handleMouseUp() {
        this.setState({
          height: 'h-14',
          width: 'w-[93%]',
          opacity: 'opacity-100',
          refreshState: 'Hold to refresh'
        });
      }

    render() {
        const { height, width, opacity, refreshState } = this.state;
        const navbarClassName = `${width} ${height} bg-white rounded-2xl ${opacity} shadow-lg `;

        return (
        <div className="flex items-center justify-center fixed w-screen mt-5">
            <div
            className={navbarClassName}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            >
            <div className="flex items-center justify-between h-full mx-auto">
                <h1 className="ml-5 text-lg font-sans">PoliticsBoard</h1>
                <div className="flex items-center h-full mx-auto opacity-50 pointer-events-none">
                    <h1 className='ml-24 text-lg font-sans'>{refreshState}</h1>
                </div>
                <div className="flex">
                <NavButton text="Register" onClick={() => (window.location = '/')} />
                <NavButton text="Log In" onClick={() => (window.location = '/')} />
                </div>
            </div>
            </div>
        </div>
        );
    }
}
  

  

export default Navbar;
