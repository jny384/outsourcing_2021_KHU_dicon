import './HomeView.css';
import React from "react";
import OutLink from "./outLink";
import DecoIMG from "./decoIMG";
import {Link} from "react-router-dom";

function HomeView() {
    return (
        <>
            <div className="hommeWrap">
                <div className="items">
                    <OutLink/>
                    <OutLink/>
                    <DecoIMG/>
                    <DecoIMG/>
                    <Link to="/write">관리자 글쓰기(예비)</Link>
                </div>

            </div>
        </>
    );
}
export default HomeView;