import React, {Component} from 'react';
import NextButton from "../../components/form_components/next_btn";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function PageTwo({ pageLocationCallback }) {

    const handlePageLocationChange = pageLocationCallback;

    const editorConfig = { //CONFIGURES EDITOR SETTINGS
        // CKEditor configuration options
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        resize_maxWidth: '100%',
        resize_maxHeight: '100%',
      };

    return(
        <div className="flex flex-col col-span-2 items-center h-[85vh] overflow-hidden">
            <div className='w-11/12 h-[80%] m-5 overflow-hidden'>
                <div className='overflow-y-scroll h-full w-full'>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>This is your canvas. Write to your heart's content!</p>"
                        config={editorConfig}
                        onReady={(editor) => {
                            editor.ui.view.editable.element.style.height = '100%';
                        }}
                    />
                </div>
            </div>
            <NextButton currentPage = {2} handlePageLocationChange = {handlePageLocationChange}/>
        </div>
    )
}

export default PageTwo;