import {React, Component} from 'react';

import Verifier from './middleware/verifier';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            currentPage: ''
        }

    }

    componentDidMount() {
        this.fetchUser();
        this.setPageTicker();
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

    setPageTicker() {

        const regexWrite = /^http:\/\/localhost:5173\/write$/;
        const regexArticle = /^http:\/\/localhost:5173\/article\/[a-zA-Z0-9]{24}$/;
        const regexPage = /^http:\/\/localhost:5173\/(?:[a-zA-Z0-9]{24})?$/;
        const regexUser = /^http:\/\/localhost:5173\/user\/[a-zA-Z0-9]{24}$/;
        const url = window.location.href;

        if (regexPage.test(url) || regexArticle.test(url)) {
            this.setState({currentPage: 'articles'});
        } else if (regexWrite.test(url)) {
            this.setState({currentPage : 'write'});
        } else {
            this.setState({currentPage : 'profile'});
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

        const {user, currentPage} = this.state;

        return(
            <div className='h-16 border-b mt-1 p-4 flex items-center'>
                <h1 className='text-4xl font-bold cursor-pointer' onClick={() => { window.location = '/' }}>
                    <span style={{ color: '#3200FF' }}>Soap</span>
                    <span style={{ color: '#C62368' }}>Box</span>
                </h1>
                <div className="ml-auto hidden md:flex justify-between w-3/6">
                <h1 className={`text-2xl cursor-pointer ${currentPage === 'articles' ? 'bg-gray-200 hover:bg-gray-400' : ''} rounded-lg px-2 transition duration-300`} onClick={() => window.location = '/'}>Articles</h1>
                    <h1 className={`text-2xl cursor-pointer ${currentPage === 'write' ? 'bg-gray-200 hover:bg-gray-400' : ''} rounded-lg px-2 transition duration-300`} onClick = {() => {window.location = '/write'}}>Write</h1>
                    <div className={`flex mr-8 lg:mr-16 cursor-pointer transition duration-200 rounded-lg px-2 ${currentPage === 'profile' ? 'bg-gray-200 hover:bg-gray-400' : ''}`}
                    onClick = {() => {this.directProfileBtnClick(user)}}>
                        <h1 className={`${user ? 'font-bold' : ''} text-2xl`} >
                                {user ? user.name : 'Log In'}
                        </h1>
                        {user && <img src={user.pfp} alt="Your image" className="h-8 w-8 bg-cover ml-2 rounded-full" style={{ borderRadius: "50%" }} />}
                    </div>
                </div>
            </div>
        )
    }
}
  

export default Navbar;
