import './HomeView.css';
import React from "react";
import OutLink from "./outLink";
import DecoIMG from "./decoIMG";
import {Link} from "react-router-dom";
import InstaLink from "../../components/home/items/instaLink";
import YoutubeLink from "../../components/home/items/youtubeLink";

function HomeView() {
    return (
        <>
            <div className="hommeWrap">
                <div className="items">
                    <div className="link">
                        <div className="insta_link">
                            <InstaLink/>
                        </div>
                        <div className="youtube_link">
                            <YoutubeLink/>
                        </div>
                    </div>
                    <div className="deco_image">
                        <div className="notice_image">
                            <DecoIMG/>
                        </div>
                        <div className="four_deco_image">
                            <div id="deco_1">
                                <DecoIMG/>
                                <DecoIMG/>
                            </div>
                            <div id="deco_2">
                            </div>
                            <div id="deco_3">
                                <DecoIMG/>
                                <DecoIMG/>
                            </div>
                            <div id="deco_4">
                            </div>
                        </div>
                    </div>
                    <Link to="/write">관리자 글쓰기(예비)</Link>
                </div>

            </div>
        </>
    );
}
export default HomeView;