import React, {useState} from 'react';

import Navbar from "../components/navbar";

import UserFormSubmitHandler from '../components/middleware/userformsubmithandler';


//Page to sign in or register for SoapBox
function AccountEntryPage () {

    const soapbox_explained_bgs = `data:image/svg+xml;base64,${btoa(
        `<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="600" height="900" fill="#d53767"></rect><defs><linearGradient id="grad1_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#d53767" stop-opacity="1"></stop><stop offset="70%" stop-color="#d53767" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#d53767" stop-opacity="1"></stop><stop offset="70%" stop-color="#d53767" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(600, 0)"><path d="M0 540.8C-21 489.5 -42 438.1 -58.3 405.8C-74.7 373.6 -86.4 360.4 -107.3 365.6C-128.2 370.7 -158.3 394.1 -178.6 391.1C-199 388.2 -209.5 358.9 -213 331.5C-216.5 304 -212.9 278.5 -247.5 285.7C-282.2 292.8 -355.2 332.7 -376.4 326.1C-397.6 319.5 -367 266.4 -381.9 245.5C-396.9 224.5 -457.3 235.6 -492 224.7C-526.6 213.7 -535.5 180.7 -502.8 147.6C-470 114.5 -395.5 81.4 -394.9 56.8C-394.3 32.2 -467.6 16.1 -540.8 0L0 0Z" fill="#5e21ff"></path></g><g transform="translate(0, 900)"><path d="M0 -540.8C21 -513.8 42.1 -486.8 71 -493.9C100 -501.1 136.8 -542.4 152.4 -518.9C167.9 -495.4 162.2 -407 167.4 -366.6C172.6 -326.2 188.7 -333.7 228.2 -355C267.6 -376.3 330.3 -411.3 340.5 -393C350.8 -374.7 308.7 -303.2 325.7 -282.2C342.8 -261.3 419.1 -290.8 433.2 -278.4C447.4 -266 399.4 -211.7 398.4 -182C397.4 -152.2 443.4 -147.2 439.4 -129C435.4 -110.9 381.4 -79.8 390 -56.1C398.6 -32.4 469.7 -16.2 540.8 0L0 0Z" fill="#5e21ff"></path></g></svg>`
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
                        <h1 for='email' className='text-2xl mt-1 mr-4 mb-2 font-bold'>Email:</h1><input type="email" id="email" name="email" className="w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2" onChange = {(e) => setEmail(e.target.value)}></input>
                        <h1 for='email' className={`text-2xl mt-1 mr-4 mb-2 font-bold ${loginToggler ? 'hidden' : ''}`}>Name:</h1><input type="text" id="name" name="name" className={`w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2 ${loginToggler ? 'hidden' : ''}`} onChange = {(e) => setName(e.target.value)}></input>
                        <h1 for='password' className='text-2xl mt-1 mr-4 mb-2 font-bold'>Password:</h1><input type="password" id="password" name="password" className="w-1/4 border focus:ring focus:ring-opacity-50 ring-soapblue rounded-lg p-2" onChange = {(e) => setPassword(e.target.value)}></input>
                        <div className='mt-auto w-24 text-center text-white text-2xl font-bold items-center justify-center flex rounded-lg h-12 bg-[#3200FF] hover:bg-red-500 cursor-pointer transition duration-200' onClick = {() => UserFormSubmitHandler(loginToggler, {name: name, email: email, password: password})}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountEntryPage;