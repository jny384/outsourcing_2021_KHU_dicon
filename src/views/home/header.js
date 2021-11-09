import React from "react";
import Clock from "react-live-clock";
import './header.css'

export default function Header() {
    return(
        <div className="header">
            <div className="header_left">
                <div className="icon">
                    <a id="homeIcon" href="/">sss</a>
                </div>
                <div className="dicon_2021"></div>
                <div className="info"></div>
            </div>

            <div className="header_right">
                <div className="insta_header"></div>
                <div className="youtube_header"></div>
                <Clock className="real_time" format={'HH:mm:ss'} ticking={true}/>
            </div>
        </div>
    )
}