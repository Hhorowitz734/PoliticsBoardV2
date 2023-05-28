import NextButton from "../../components/form_components/next_btn";

function PageThree({ pageLocationCallback }) {

    const handlePageLocationChange = pageLocationCallback;
    
    return(
        <div className="flex flex-col col-span-2 items-center">
            <NextButton currentPage = {3} handlePageLocationChange = {handlePageLocationChange}/>
        </div>
    )
}

export default PageThree;