import React, { Component } from 'react';
import SystemCinema from './SystemCinema';

class ShowTimes extends Component {
    render() {
        return (
            <div id="cumrap" className="show-times container pt-4">
                <SystemCinema/>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="phimdangchieu"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
               
              </div>
            </div>
           
          </div>
        );
    }
}

export default ShowTimes;