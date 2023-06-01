import React, {useState, useRef, useEffect} from "react";

import Navbar from "../components/navbar";
import FormNavigator from "../components/form_components/formnavigator";

import PageOne from "./form_minipages/page1";
import PageTwo from "./form_minipages/page2";
import PageThree from "./form_minipages/page3";
import PageFour from "./form_minipages/page4";

import Verifier from "../components/middleware/verifier";

export default function Drafting(){

    const form_progress_bg = `data:image/svg+xml;base64,${btoa(
        `<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="600" height="900" fill="#5e21ff"></rect><path d="M0 507L14.3 495.7C28.7 484.3 57.3 461.7 85.8 457.8C114.3 454 142.7 469 171.2 484.2C199.7 499.3 228.3 514.7 257 520C285.7 525.3 314.3 520.7 343 522C371.7 523.3 400.3 530.7 428.8 505.5C457.3 480.3 485.7 422.7 514.2 410.7C542.7 398.7 571.3 432.3 585.7 449.2L600 466L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#fa7268"></path><path d="M0 519L14.3 503.2C28.7 487.3 57.3 455.7 85.8 457.5C114.3 459.3 142.7 494.7 171.2 512.7C199.7 530.7 228.3 531.3 257 512.8C285.7 494.3 314.3 456.7 343 452.3C371.7 448 400.3 477 428.8 498.2C457.3 519.3 485.7 532.7 514.2 531.5C542.7 530.3 571.3 514.7 585.7 506.8L600 499L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#ef5f67"></path><path d="M0 540L14.3 543.7C28.7 547.3 57.3 554.7 85.8 569.2C114.3 583.7 142.7 605.3 171.2 602.3C199.7 599.3 228.3 571.7 257 564.7C285.7 557.7 314.3 571.3 343 566.5C371.7 561.7 400.3 538.3 428.8 544.2C457.3 550 485.7 585 514.2 611.8C542.7 638.7 571.3 657.3 585.7 666.7L600 676L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#e34c67"></path><path d="M0 619L14.3 619.5C28.7 620 57.3 621 85.8 628.2C114.3 635.3 142.7 648.7 171.2 667.2C199.7 685.7 228.3 709.3 257 715.5C285.7 721.7 314.3 710.3 343 702.2C371.7 694 400.3 689 428.8 698.7C457.3 708.3 485.7 732.7 514.2 736.2C542.7 739.7 571.3 722.3 585.7 713.7L600 705L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#d53867"></path><path d="M0 722L14.3 734.7C28.7 747.3 57.3 772.7 85.8 775.2C114.3 777.7 142.7 757.3 171.2 757C199.7 756.7 228.3 776.3 257 773.5C285.7 770.7 314.3 745.3 343 742.2C371.7 739 400.3 758 428.8 759.8C457.3 761.7 485.7 746.3 514.2 746.2C542.7 746 571.3 761 585.7 768.5L600 776L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#c62368"></path></svg>`
    )}`;

    const [pageLocation, setPageLocation] = useState(1)

    const formNavigatorRef = useRef(null); //REF TO CHANGE INTERNAL STATE OF FORM NAVIGATOR FROM THIS PAGE

    const handlePageLocationChange = (location) => {
        setPageLocation(location);
        if (formNavigatorRef.current){
            formNavigatorRef.current.setPage(location, true);
        } 
    } 

    //HANDLES COLLECTION FORM RESULTS
    const [formResults, setFormResults] = useState({
        title: '',
        articleData: '',
        anonymous: false,
        userObject: null,
    });

    useEffect(() => { //Sets User Object in form results
        async function fetchUser() {
          try {
            const userobj = await Verifier();
            const modifiedFormData = { ...formResults };
            modifiedFormData.userObject = userobj;
            setFormResults(modifiedFormData);
          } catch (error) {
            console.log(error);
          }
        }
      
        if (!formResults.userObject) {
            fetchUser();
        }
      }, []);


    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-[95%] h-[93%] grid grid-cols-3 mx-auto border rounded-xl shadow-lg">
                    <FormNavigator 
                        pageLocationCallback = {handlePageLocationChange}
                        ref = {formNavigatorRef}
                     />
                    {pageLocation === 1 && <PageOne pageLocationCallback = {handlePageLocationChange} formResults = {formResults} setFormResults = {setFormResults} />}
                    {pageLocation === 2 && <PageTwo pageLocationCallback = {handlePageLocationChange} formResults = {formResults} setFormResults = {setFormResults}/>}
                    {pageLocation === 3 && <PageThree pageLocationCallback = {handlePageLocationChange} formResults = {formResults} setFormResults = {setFormResults}/>}
                    {pageLocation === 4 && <PageFour formResults = {formResults} />}
                </div>
            </div>
        </div>
    )
}