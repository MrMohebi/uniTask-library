import React, {Component} from 'react';
import "./css/style.css"

class BooksRate extends Component {
    state={
        moreDownload:[""],
        moreReserves:["asdf", "testName", "شازده کوچولو"],
    }

    createMoreDownload = () =>{
        return this.state.moreDownload.map((eBook)=>{
            return(
                <div>
                    {eBook}
                </div>
            )
        })
    }

    createMoreReserves = () =>{
        return this.state.moreReserves.map((eBook)=>{
            return(
                <div>
                    {eBook}
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>

                <div className="more-download shadow">
                    <div className={"login-title"}>بیشترین دانلود</div>
                    <div className={"up-shape"}/>
                    <div className="book-rate-content">
                        {this.createMoreDownload()}
                    </div>

                </div>
                <div className="more-reserves shadow">
                    <div className={"login-title"}>بیشترین رزور</div>
                    <div className={"up-shape"}/>
                    <div className="book-rate-content">
                        {this.createMoreReserves()}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default BooksRate;