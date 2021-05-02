import React, { Component } from 'react';
import Loading from "../../assets/loader.gif";

class PageLoading extends Component {
    render() {
        return (
            <div className="loading-screen">
                <img src={Loading} alt="loading..."/>
            </div>
        );  
    }
}

export default PageLoading;