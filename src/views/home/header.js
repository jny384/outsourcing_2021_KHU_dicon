import React from "react";
import Clock from "react-live-clock";
import './header.css'

export default function Header() {
    const handleInstaClick = (e) => {
        window.location.href = 'https://www.instagram.com'; //이동할 링크
    };

    const handleYoutubeClick = (e) => {
        window.location.href = 'https://www.youtube.com'; //이동할 링크
    };

    return(
        <div className="header">
            <div className="header_left">
                <div className="icon">
                    <a id="homeIcon" href="/">sss</a>
                </div>
                <div className="dicon_2021">Dicon 2021</div>
                <div className="info">Info</div>
            </div>

            <div className="header_right">
                <div className="insta_header" onClick={handleInstaClick}></div>
                <div className="youtube_header" onClick={handleInstaClick}></div>
                <Clock className="real_time" format={'HH:mm:ss'} ticking={true}/>
            </div>
        </div>
    )
}