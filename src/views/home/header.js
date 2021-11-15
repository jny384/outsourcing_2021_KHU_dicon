import React from "react";
import Clock from "react-live-clock";
import './header.css'
import {useHistory} from "react-router-dom";

export default function Header() {
    const history = useHistory();

    const handleInstaClick = (e) => {
        window.location.href = 'https://www.instagram.com'; //이동할 링크
    };

    const handleYoutubeClick = (e) => {
        window.location.href = 'https://www.youtube.com'; //이동할 링크
    };

    const onClick = () => {
        history.push(`/2021_KHU_dicon`);
    }

    return(
        <div className="header">
            <div className="header_left">
                <div className="icon">
                    <a id="homeIcon" href="/">sss</a>
                </div>
                <div className="dicon_2021">Dicon 2021</div>
                <div className="info">
                    <a href="/2021_KHU_dicon">Info</a>
                </div>
            </div>

            <div className="header_right">
                <div className="insta_header" onClick={handleInstaClick}></div>
                <div className="youtube_header" onClick={handleYoutubeClick}></div>
                <Clock className="real_time" format={'HH:mm:ss'} ticking={true}/>
            </div>
        </div>
    )
}