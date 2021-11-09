import React from "react";
import ReactPlayer from "react-player/youtube";

const Split = ({text}) => {
    console.log(text)
    return <p>
        {text.split("\n").map((txt) => (
            <>
                {txt}
                <br />
            </>
        ))}
    </p>;
}

export default function Trash(input, profile) {
    const inputData = input;
    console.log(profile);

    const name =  input.name;
    const email =  inputData.email;
    const workInfo =  input.workInfo;
    const workLink =  inputData.workLink;
    const workTitle =  inputData.workTitle;
    const youtubeLink =  inputData.youtubeLink;
    // console.log(name);


    return(
        <>
            <div className="student_area">
                <div className="left_workview">
                    <p id="worker_name">{name}</p>
                    <p id="worker_email">{email}</p>
                    <p id="worker_workLink">{workLink}</p>
                </div>
                <div className="right_workview">
                    <p id="workTitle">{workTitle}</p>
                    <div className="work_info">
                        <p id="workInfo_title"> 작품 소개</p>
                        <Split text={"alkdjwpj \n fkjjfeojs"}/>
                        {/*<p id="workInfo">{workInfo}</p>*/}

                        {/*{workInfo.split("\n").map((line) => {*/}
                        {/*    return (<span> {line} <br/> </span>); //줄 바꿈 인식*/}
                        {/*})}*/}
                    </div>
                    <div className="work_youtube">
                        <ReactPlayer
                            width="920px"
                            height="518px"
                            align-items="center"
                            url={youtubeLink}
                            id="youtubeLink"/>
                    </div>
                </div>
            </div>
        </>
    )
}