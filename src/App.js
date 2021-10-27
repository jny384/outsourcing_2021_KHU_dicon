import './App.css';
import React, {useState} from "react";
import Clock from "react-live-clock";
import OutLink from "./outLink";
import DecoIMG from "./decoIMG";



function App() {
    return (
        <>
            <div className="header">
                <div className="header_left">
                    <div className="icon"></div>
                    <div className="dicon_2021"></div>
                    <div className="info"></div>
                </div>

                <div className="header_right">
                    <div className="insta_header"></div>
                    <div className="youtube_header"></div>
                    <Clock className="real_time" format={'HH:mm:ss'} ticking={true}/>
                </div>
            </div>

            <div className="items">
                <OutLink/>
                <OutLink/>
                <DecoIMG/>
                <DecoIMG/>
            </div>

          <div className="footer">
            KyungHee Univ. Dicon 2021 Degree Show
          </div>
      </>
  );
}

export default App;
