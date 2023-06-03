import {React, Component} from 'react';

import Verifier from './middleware/verifier';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        this.fetchUser();
        console.log(this.state.user)
    }
    
    async fetchUser() {
        try {
            const userobj = await Verifier();
            this.setState({ user: userobj });
            console.log(this.state.user)
        } catch (error) {
            console.log(error);
        }
    }

    directProfileBtnClick(user) {
        if (!user) {
            window.location = '/login'
        } else {
            window.location = `/user/${user._id}` //Directs user to user profile page if it exists
        }
    }
    
    render() {

        const {user} = this.state;

        return(
            <div className='h-16 border-b mt-1 p-4 flex items-center'>
                <h1 className='text-4xl font-bold cursor-pointer' onClick={() => { window.location = '/' }}>
                    <span style={{ color: '#3200FF' }}>Soap</span>
                    <span style={{ color: '#C62368' }}>Box</span>
                </h1>
                <div className="ml-auto hidden md:flex justify-between w-3/6">
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={() => window.location = '/'}>Articles</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick = {() => {window.location = '/write'}}>Write</h1>
                    <div className='flex mr-8 lg:mr-16 cursor-pointer'
                    onClick = {() => {this.directProfileBtnClick(user)}}>
                        <h1 className={`${user ? 'font-bold' : ''} text-2xl  hover:text-gray-500 transition duration-300`} >
                                {user ? user.name : 'Log In'}
                        </h1>
                        {user && <img src={user.pfp} alt="Your image" className="h-8 ml-2 rounded-full" style={{ borderRadius: "50%" }} />}
                    </div>
                </div>
            </div>
        )
    }
}
  

export default Navbar;
