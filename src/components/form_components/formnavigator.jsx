import React, {Component} from 'react';

class FormPart extends Component{

    constructor(props){
        super(props);

        this.number = props.number;
        this.text = props.text;
        this.description = props.description;
        this.formCallBack = props.formCallBack; //Callback function which brings form back to intended state
        this.isSelected = props.isSelected; //Is this the currently selected section of the form
        this.state = {
            isSelected: this.isSelected
        }

        this.setPageState = props.setPageCallback; //Callback to change form state

    }

    componentDidUpdate(prevProps) {
        if (prevProps.isSelected !== this.props.isSelected) {
          this.setState({ isSelected: this.props.isSelected });
        }
      }


    render(){

        const { isSelected } = this.state
        
        return(
            <div data-testid='form-navigator-component' className={`w-10/12 flex mt-2 py-4 px-2 h-18 overflow-y-hidden rounded-xl ${isSelected ? 'bg-opacity-50 bg-[#4227B9]' : ''}`}>
                <div className="flex bg-blue-400 hover:bg-blue-600 transition duration-200 hover:text-opacity-70 h-12 w-14 rounded-3xl items-center justify-center text-xl text-white font-bold cursor-pointer" onClick={this.setPageState}>{this.number}</div>
                <div className='flex flex-col'>
                    <h1 className="text-white text-xl font-bold ml-4">{this.text}</h1>
                    <h1 className="text-white text-sm ml-4 opacity-70 w-3/4">{this.description}</h1>
                </div>
            </div>
        )
    }
}


class FormNavigator extends Component {
    constructor(props) {
      super(props);

      this.form_progress_bg = `data:image/svg+xml;base64,${btoa(
        `<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="600" height="900" fill="#5e21ff"></rect><path d="M0 507L14.3 495.7C28.7 484.3 57.3 461.7 85.8 457.8C114.3 454 142.7 469 171.2 484.2C199.7 499.3 228.3 514.7 257 520C285.7 525.3 314.3 520.7 343 522C371.7 523.3 400.3 530.7 428.8 505.5C457.3 480.3 485.7 422.7 514.2 410.7C542.7 398.7 571.3 432.3 585.7 449.2L600 466L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#fa7268"></path><path d="M0 519L14.3 503.2C28.7 487.3 57.3 455.7 85.8 457.5C114.3 459.3 142.7 494.7 171.2 512.7C199.7 530.7 228.3 531.3 257 512.8C285.7 494.3 314.3 456.7 343 452.3C371.7 448 400.3 477 428.8 498.2C457.3 519.3 485.7 532.7 514.2 531.5C542.7 530.3 571.3 514.7 585.7 506.8L600 499L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#ef5f67"></path><path d="M0 540L14.3 543.7C28.7 547.3 57.3 554.7 85.8 569.2C114.3 583.7 142.7 605.3 171.2 602.3C199.7 599.3 228.3 571.7 257 564.7C285.7 557.7 314.3 571.3 343 566.5C371.7 561.7 400.3 538.3 428.8 544.2C457.3 550 485.7 585 514.2 611.8C542.7 638.7 571.3 657.3 585.7 666.7L600 676L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#e34c67"></path><path d="M0 619L14.3 619.5C28.7 620 57.3 621 85.8 628.2C114.3 635.3 142.7 648.7 171.2 667.2C199.7 685.7 228.3 709.3 257 715.5C285.7 721.7 314.3 710.3 343 702.2C371.7 694 400.3 689 428.8 698.7C457.3 708.3 485.7 732.7 514.2 736.2C542.7 739.7 571.3 722.3 585.7 713.7L600 705L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#d53867"></path><path d="M0 722L14.3 734.7C28.7 747.3 57.3 772.7 85.8 775.2C114.3 777.7 142.7 757.3 171.2 757C199.7 756.7 228.3 776.3 257 773.5C285.7 770.7 314.3 745.3 343 742.2C371.7 739 400.3 758 428.8 759.8C457.3 761.7 485.7 746.3 514.2 746.2C542.7 746 571.3 761 585.7 768.5L600 776L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z" fill="#c62368"></path></svg>`
    )}`;
  
      //Adds test cases to test Form with parts in test mode
      if (process.env.NODE_ENV === 'development') {
        this.form = [
          { text: "Title", description: "Give your article a title that captures your piece.",  isCurrentPage: true },
          { text: "Article", description: "Give your article a title that captures your piece.", isCurrentPage: false },
          { text: "Post Settings", description: "Give your article a title that captures your piece.", isCurrentPage: false },
          { text: "Rules", description: "Give your article a title that captures your piece.", isCurrentPage: false }
        ];
      } else {
        this.form = props.form;
      }
  
      this.state = {
        formParts: this.form
      };

      this.pageLocationCallback = props.pageLocationCallback;
  
      this.formPartRefs = this.form.map(() => React.createRef());
      this.currentSelectedPage = 0;
  
      this.setNextPage = this.setNextPage.bind(this);
    }
  
    componentDidMount() {
      this.setFormPartRefs();
    }
  
    setFormPartRefs() {
      const refs = this.form.map(() => React.createRef());
      this.formPartRefs = refs;
    }
  
    setNextPage() {
        if (this.state.formParts[this.currentSelectedPage + 1]){ //Moves form to next page if a next page exists
            const updatedFormParts = [...this.state.formParts];
            updatedFormParts[this.currentSelectedPage].isCurrentPage = false;
            this.currentSelectedPage += 1;
            updatedFormParts[this.currentSelectedPage].isCurrentPage = true;
            this.pageLocationCallback(this.currentSelectedPage);
            this.setState({ formParts: updatedFormParts });
        } else { //Handles submission if form complete
            window.location = '/'
        }
    }

    setPage(location, calledByCallback = false) {
        const updatedFormParts = [...this.state.formParts];
        updatedFormParts[this.currentSelectedPage].isCurrentPage = false;
        this.currentSelectedPage = location - 1;
        updatedFormParts[this.currentSelectedPage].isCurrentPage = true;
        this.setState({ formParts: updatedFormParts });
        if (!calledByCallback) { //This prevents an infinite loop
            this.pageLocationCallback(location);
        }
    }
  
    render() {
        const { formParts } = this.state;
      
        return (
          <div className="flex flex-col col-span-1 m-3 rounded-xl pl-8" style={{ backgroundImage: `url(${this.form_progress_bg})` }}>
            {formParts.map((formpart, index) => {
              const formPartRef = this.formPartRefs[index];
              return (
                <FormPart
                  key={index}
                  text={formpart.text}
                  description={formpart.description}
                  number={index + 1}
                  isSelected={formpart.isCurrentPage}
                  setPageCallback = {() => this.setPage(index + 1)}
                  ref={formPartRef}
                />
              );
            })}
          </div>
        );
    }
}      
  
  export default FormNavigator;
  