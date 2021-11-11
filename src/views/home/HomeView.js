import './HomeView.css';
import React from "react";

import DecoIMG from "./decoIMG";
import InstaLink from "../../components/home/items/instaLink";
import YoutubeLink from "../../components/home/items/youtubeLink";

import Admin from "../../components/home/items/admin";

import MotionGraphics from "../../components/home/team/MotionGraphics";
import Animation from "../../components/home/team/Animation";
import VFX_SFX from "../../components/home/team/VFX_SFX";
import Game from "../../components/home/team/Game";
import InterActionDesign from "../../components/home/team/InterActionDesign";
import WebtoonConceptArt from "../../components/home/team/WebtoonConceptArt";

function HomeView() {
    return (
        <>
            <div className="hommeWrap">
                <div className="items">
                    <div className="left_items">

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
                    </div>
                    <div className="right_items">
                        <Admin/>
                        <div className="team" >
                            <MotionGraphics/>
                            <Animation/>
                            <VFX_SFX/>
                            <Game/>
                            <InterActionDesign/>
                            <WebtoonConceptArt/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeView;