import {React, Component} from 'react';

class Navbar extends Component {
    
    render() {

        return(
            <div className='h-16 border-b mt-1 p-4 flex items-center'>
                <h1 className='text-4xl font-bold cursor-pointer'>SoapBox</h1>
                <div className="ml-auto hidden md:flex justify-between w-3/6">
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300">Home</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300">Articles</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300 mr-8lg:mr-16">Shorts</h1>
                </div>
            </div>
        )
    }
}
  

export default Navbar;
