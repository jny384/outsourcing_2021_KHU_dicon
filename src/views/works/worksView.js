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
    useEffect(() => {
        async function exec(){
            const data =  await GetPostingInfo(match.params.urlId);
            setInputData(data);
            console.log(data);
        }
        exec();
    }, [])

    const [inputData, setInputData] = useState('');
    const name =  inputData.name;
    const email =  inputData.email;
    const workInfo =  inputData.workInfo;
    const workLink =  inputData.workLink;
    const workTitle =  inputData.workTitle;
    const youtubeLink =  inputData.youtubeLink;

    return(
        <>
            <div className="student_area">
                <div className="left_workview">
                    <div id="student_pic"> 사진 자리</div>
                    <p id="worker_name">{name}</p>
                    <div className="left_detail">
                        <p id="worker_email">{email}</p>
                        <p id="worker_workLink">{workLink}</p>
                    </div>
                </div>

                <div className="right_workview">
                    <p id="workTitle">{workTitle}</p>
                    <div className="work_info">
                        <p id="workInfo_title"> 작품 소개</p>
                        <Split text={workInfo||''}/>
                    </div>
                    <div className="work_youtube">
                        <ReactPlayer
                            width="920px"
                            height="518px"
                            align-items="center"
                            url={youtubeLink}
                            style={style.youtubeLink}
                            id="youtubeLink"/>
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