import React, {useState} from 'react';

import Navbar from "../components/navbar";

import UserFormSubmitHandler from '../components/middleware/userformsubmithandler';


//Page to sign in or register for SoapBox
function AccountEntryPage () {

    const soapbox_explained_bgs = `data:image/svg+xml;base64,${btoa(
        `<svg id="visual" viewBox="0 0 540 960" width="540" height="960" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="540" height="960" fill="#C62368"></rect><g filter="url(#blur1)"><circle cx="536" cy="626" fill="#3200FF" r="363"></circle><circle cx="155" cy="914" fill="#C62368" r="363"></circle><circle cx="11" cy="114" fill="#3200FF" r="363"></circle><circle cx="473" cy="111" fill="#3200FF" r="363"></circle><circle cx="345" cy="741" fill="#C62368" r="363"></circle><circle cx="196" cy="171" fill="#3200FF" r="363"></circle></g></svg>`
    )}`;

    const [loginToggler, setLoginToggler] = useState(true);

    //Formparts states
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-[95%] h-[93%] grid grid-cols-3 mx-auto border rounded-xl shadow-lg">
                    <div className="flex flex-col col-span-1 rounded-xl m-3 p-4" style={{ backgroundImage: `url(${soapbox_explained_bgs})` }}>
                        <h1 className="text-6xl text-white font font-extrabold">SoapBox.</h1>
                        <h1 className="text-4xl text-white font font-extrabold mt-2">Where <span className = 'text-green-500'>change</span> happens.</h1>
                        <h1 className="mt-auto text-white font-2xl">{`${loginToggler ? 'No account?' : 'Have an account?'}`} Click <span className = 'cursor-pointer underline' onClick = {() => setLoginToggler(!loginToggler)}>here</span></h1>
                    </div>
                    <div className="flex flex-col col-span-2 items-center pb-4">
                        <h1 className="text-6xl text-center mt-8 font-bold mb-8">{`${loginToggler ? 'Log In' : 'Register'}`}</h1>
                        <h1 for='email' className='text-2xl mt-1 mr-4 mb-2 font-bold'>Email:</h1><input type="email" id="email" name="email" class="w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2" onChange = {(e) => setEmail(e.target.value)}></input>
                        <h1 for='email' className={`text-2xl mt-1 mr-4 mb-2 font-bold ${loginToggler ? 'hidden' : ''}`}>Name:</h1><input type="text" id="name" name="name" class={`w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2 ${loginToggler ? 'hidden' : ''}`} onChange = {(e) => setName(e.target.value)}></input>
                        <h1 for='password' className='text-2xl mt-1 mr-4 mb-2 font-bold'>Password:</h1><input type="password" id="password" name="password" class="w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2" onChange = {(e) => setPassword(e.target.value)}></input>
                        <div className='mt-auto w-24 text-center text-white text-2xl font-bold items-center justify-center flex rounded-lg h-12 bg-[#3200FF] hover:bg-red-500 cursor-pointer transition duration-200' onClick = {() => UserFormSubmitHandler(loginToggler, {name: name, email: email, password: password})}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountEntryPage;