import React from "react";
import Clock from "react-live-clock";
import './header.css'

import cookie from './heder/img/cookie_icon_header.png';
import instagram from './heder/img/instagram_header.png';
import youtube from './heder/img/youtube_header.png';

export default function Header() {
    const handleInstaClick = (e) => {
        window.location.href = 'https://instagram.com/cookie_dicon_2021?utm_medium=copy_link'; //이동할 링크
    };

    const handleYoutubeClick = (e) => {
        window.location.href = 'https://youtube.com/channel/UChHuUIP9W4_7FXr8UFZ7aoA'; //이동할 링크
    };

    return(
        <div className="header">
            <div className="header_left">
                <div className="icon">
                    <a href='/'>
                        <img className="home_img" src={cookie}/>
                    </a>
                </div>
                <a href="/" className="dicon_2021">Dicon 2021</a>
                <div className="info">
                    <a href="/2021_KHU_dicon">Info</a>
                </div>
            </div>

            <div className="header_right">
                <div className="insta_header" onClick={handleInstaClick}>
                    <img className="insta_img" src={instagram}/>
                </div>
                <div className="youtube_header" onClick={handleYoutubeClick}>
                    <img className="tube_img" src={youtube}/></div>
                <Clock className="real_time" format={'HH:mm:ss'} ticking={true}/>
            </div>
        </div>
    )
}