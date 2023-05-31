import React, {useState, useRef} from 'react';

import NextButton from "../../components/form_components/next_btn";
import Toggle from "../../components/form_components/toggle";

function PageThree({ pageLocationCallback, formResults, setFormResults }) {

    const handlePageLocationChange = pageLocationCallback;


    const anonToggleRef = useRef(null);

    const handleNextPage = (page) => { //Modified function to first get toggle states
        const modifiedFormData = { ...formResults };
        modifiedFormData.anonymous = anonToggleRef.current.state.toggled;
        setFormResults(modifiedFormData);
        handlePageLocationChange(page);
    }



    return(
        <div className="flex flex-col col-span-2 items-center">
            <h1 className="text-6xl text-center mt-8 font-bold">Settings</h1>
            <div className="w-full flex flex-col mt-8 items-center">
                <Toggle ref = {anonToggleRef} />
            </div>
            
            <NextButton currentPage = {3} handlePageLocationChange = {handleNextPage}/>
            
        </div>
    )
}

export default PageThree;