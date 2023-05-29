import NextButton from "../../components/form_components/next_btn";
import Toggle from "../../components/form_components/toggle";

function PageThree({ pageLocationCallback }) {

    const handlePageLocationChange = pageLocationCallback;

    return(
        <div className="flex flex-col col-span-2 items-center">
            <h1 className="text-6xl text-center mt-8 font-bold">Settings</h1>
            <div className="w-full flex flex-col mt-8 items-center">
                <Toggle />
            </div>
            
            <NextButton currentPage = {3} handlePageLocationChange = {handlePageLocationChange}/>
            
        </div>
    )
}

export default PageThree;