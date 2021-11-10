import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player/youtube";

import {GetPostingInfo} from "../../components/firebase/getPostingInfo";
import './workView.css';

const Split = ({text}) => {
    return <p>
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
        console.log("start")
        exec();
    }, [])
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [workInfo, setWorkInfo] = useState('');
    // const [workLink, setWorkLink] = useState('');
    // const [workTitle, setWorkTitle] = useState('');
    // const [youtubeLink, setYoutubeLink] = useState('');
    // const [profileUrl, setProfileUrl] = useState('');
    // const [worksUrl, setWorksUrl] = useState([]);
    async function exec(){
        const data =  await GetPostingInfo(match.params.urlId);
        await setInputData(data);
        // setName(inputData.name);
        // setEmail(inputData.email);
        // setWorkInfo(inputData.workInfo);
        // setWorkLink(inputData.workLink);
        // setWorkTitle(inputData.workTitle);
        // setYoutubeLink(inputData.youtubeLink);
        // setProfileUrl(inputData.profileUrl);
        // setWorksUrl(inputData.worksUrl);
        console.log(data);
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
    console.log(worksUrl)
    // const directory = match.params.urlId;

    const imageList =  () => {
        const imageUrls = [];
        for (let i in worksUrl) {
            imageUrls.push(<img className="works_images" key={i} src={worksUrl[i]} alt="works_image"/>);
            console.log("for")
        }
        console.log("return")
        return imageUrls;
    };

    return(
        <>
            <div className="student_area">
                <div className="left_workview">
                    <div id="student_pic">
                        <img
                            src={profileUrl || "http://via.placeholde.com/300"}
                            alt="firebase-image"
                            style={{width: "394px", height : "534px"}}
                        />
                    </div>
                    <p id="worker_name">{name}</p>
                    <div className="left_detail">
                        <p id="worker_email">{email}</p>
                        <p id="worker_workLink">{workLink}</p>
                    </div>
                </div>
                <div className="right_workview">
                    <div className="work_info">
                        <p id="workTitle">{workTitle}</p>
                        {/*<p id="workInfo_title"> 작품 소개</p>*/}
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
                    </div>
                    <div className="work_detail_pic">
                        {imageList()}
                    </div>
                </div>
            </div>
        </>
    )
}


const style = {
    youtubeLink : {
        width: '920px'
    }
}