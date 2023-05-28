import NextButton from "../../components/form_components/next_btn";

function PageFour() {

    return(
        <div className="flex flex-col col-span-2 items-center">
            <NextButton currentPage = {4} handlePageLocationChange = {() => {window.location = '/'}}/>
        </div>
    )
}

export default PageFour;