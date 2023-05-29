import React, {Component} from 'react';

class NextButton extends Component {

    constructor( props ) {
        super(props)

        this.page = props.currentPage;
        this.setPage = props.handlePageLocationChange;

    }

    setNextPage() {
        this.setPage(this.page + 1)
    }


    render () {

        return(
            <div className="w-16 h-8 mt-14 bg-red-400 hover:bg-emerald-500 transition duration-200 rounded-xl flex items-center justify-center text-lg text-white shadow-md cursor-pointer"
            onClick={() => this.setNextPage()}>Next</div>
        )
    
    }
}

export default NextButton;