import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player/youtube";

import {GetPostingInfo} from "../../components/firebase/getPostingInfo";
import './workView.css';
import title from  './img/title_W.png';

const Split = ({text}) => {
    return <p className="works_detail_txt">
        {text.split("\n").map((txt) => (
            <>
                {txt}
                <br />
            </>
        ))}
    </p>;
}

export default function WorksView({match}) {
    const [inputData, setInputData] = useState('');
    useEffect(() => {
        exec();
    }, [])

    async function exec(){
        const data =  await GetPostingInfo(match.params.teamName, match.params.urlId);
        await setInputData(data);
    }

    console.log(inputData)
    const name =  inputData.name;
    const email =  inputData.email;
    const workInfo =  inputData.workInfo;
    const workLink =  inputData.workLink;
    const workTitle =  inputData.workTitle;
    const youtubeLink =  inputData.youtubeLink;
    const profileUrl = inputData.profileUrl;
    const worksUrl = inputData.worksUrl;
    const teamName = inputData.teamName;
    // console.log(worksUrl)

    const imageList =  () => {
        const imageUrls = [];
        for (let i in worksUrl) {
            imageUrls.push(<img className="works_images" key={i} src={worksUrl[i]} alt="works_image"/>);
            // console.log("for")
        }
        // console.log("return")
        return imageUrls;
    };

    return(
        <>
            <div className="student_area">
                <div className="left_workview">
                    <div id="student_pic">
                        <img
                            className="student_profile_pic"
                            src={profileUrl || "http://via.placeholde.com/300"}
                            alt="firebase-image"
                            // width="100%"
                            // height="auto"
                            // style={{width: "394px", height : "534px"}}
                        />
                    </div>
                    <p id="worker_name">{name}</p>
                    <div className="left_detail">
                        <p id="worker_email">{email}</p>
                        <a href={workLink} id="worker_workLink">{workLink}</a>
                    </div>
                </div>
                <div className="right_workview">
                    <div className="work_info">
                        <p id="workTitle">{workTitle}</p>
                        <Split text={workInfo||''}/>
                    </div>
                    <div className="work_youtube">
                        <ReactPlayer
                            width="920px"
                            height="518px"
                            align-items="center"
                            url={youtubeLink}
                            style={style.youtubeLink}
                            id="youtubeLink"
                        />
                        <ReactPlayer
                            width="658px"
                            height="370px"
                            align-items="center"
                            url={youtubeLink}
                            style={style.youtubeLink}
                            id="youtubeLink_mid"
                        />

                        <ReactPlayer
                            width="500px"
                            height="279px"
                            align-items="center"
                            url={youtubeLink}
                            style={style.youtubeLink}
                            id="youtubeLink_tab"
                        />
                        <ReactPlayer
                            width="328px"
                            height="183px"
                            align-items="center"
                            url={youtubeLink}
                            style={style.youtubeLink}
                            id="youtubeLink_small"
                        />
                    </div>
                    <div className="work_detail_pic">
                        {imageList()}
                    </div>

                    <div className="works_footer">
                        <p id="footer_text">KyungHee Univ. Dicon 2021 Degree Show </p>
                    </div>
                </div>
            </div>
            <div className="left_color">
                <div id="student_pic">
                    <img
                        className="student_profile_pic"
                        src={profileUrl || "http://via.placeholde.com/300"}
                        alt="profile-image"
                        // width="100%"
                        // height="auto"
                        // style={{width: "394px", height : "534px"}}
                    />
                </div>
                <p id="worker_name">{name}</p>
                <div className="left_detail">
                    <p id="worker_email">{email}</p>
                    <a href={workLink} id="worker_workLink">{workLink}</a>
                </div>
                <img className="title_workView" src={title} alt="cookie"/>
            </div>
            {/*<div className="footer footer_works">*/}
            {/*    <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>*/}
            {/*</div>*/}
        </>
    )
}


const style = {
    youtubeLink : {
        width: '920px'
    }
}