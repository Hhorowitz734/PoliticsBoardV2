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
            <div className="flex flex-col w-full h-full items-center justify-center">
                <h1 className="text-6xl text-center font-bold">Title</h1>
                <input 
                    type='text' 
                    className="h-16 w-8/12 border-2 text-center text-black focus:text-white hover:text-white text-2xl rounded-xl outline-none hover:bg-[#5e21ff]  hover:bg-opacity-50 focus:bg-[#5e21ff] focus:bg-opacity-65 transition duration-300"
                    value = {title}
                    onChange = {handleTitleChange}
                    />
                <NextButton currentPage = {1} handlePageLocationChange = {handlePageLocationChange}/>
            </div>
        </div>
    )
}

export default PageOne;