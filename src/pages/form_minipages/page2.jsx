import React, {useState} from 'react';
import NextButton from "../../components/form_components/next_btn";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function PageTwo({ pageLocationCallback, formResults, setFormResults  }) {

    const handlePageLocationChange = pageLocationCallback;

    const editorConfig = { //CONFIGURES EDITOR SETTINGS
        // CKEditor configuration options
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        resize_maxWidth: '100%',
        resize_maxHeight: '100%',
      };

    // Data from the form storage
    const [articleText, getArticleText] = useState(formResults.articleData);

    const handleEditorChange = (event, editor) => {
        const newData = editor.getData();
        getArticleText(newData);
        transferDataToForm(newData);
    };

    const transferDataToForm = () => {
        const modifiedFormData = { ...formResults };
        modifiedFormData.articleData = articleText;
        setFormResults(modifiedFormData);
    }

    return(
        <div className="flex flex-col col-span-2 items-center h-[85vh] overflow-hidden">
            <div className='w-11/12 h-[80%] m-5 overflow-hidden'>
                <div className='overflow-y-scroll h-full w-full'>
                    <CKEditor
                        editor={ ClassicEditor }
                        data = { articleText }
                        config={editorConfig}
                        onReady={(editor) => {
                            editor.ui.view.editable.element.style.height = '100%';
                        }}
                        onChange={handleEditorChange}
                    />
                </div>
            </div>
            <NextButton
                currentPage={2}
                handlePageLocationChange={handlePageLocationChange}
            />

        </div>
    )
}

export default PageTwo;