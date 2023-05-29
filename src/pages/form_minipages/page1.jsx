import React, {useState} from 'react';

import NextButton from "../../components/form_components/next_btn"

function PageOne({ pageLocationCallback, formResults, setFormResults }) {

    const handlePageLocationChange = pageLocationCallback; //Handles changing page state for nextbutton

    const [title, setTitle] = useState(formResults.title);

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        const modifiedFormData = { ...formResults };
        modifiedFormData.title = newTitle;
        setFormResults(modifiedFormData);
      };
      


    return(
        <div className="flex flex-col col-span-2 items-center">
            <h1 className="text-4xl text-center mt-8 font-bold">Title</h1>
            <div className="flex flex-col w-full h-full items-center">
                <input 
                    type='text' 
                    className="h-16 w-8/12 mt-24 border-b-2 border-black text-center text-black focus:text-white hover:text-white text-6xl rounded-xl outline-none hover:bg-[#5709DA] hover:bg-opacity-50 focus:bg-[#5709DA] focus:bg-opacity-100 transition duration-300"
                    value = {title}
                    onChange = {handleTitleChange}
                    />
                <NextButton currentPage = {1} handlePageLocationChange = {handlePageLocationChange}/>
            </div>
        </div>
    )
}

export default PageOne;