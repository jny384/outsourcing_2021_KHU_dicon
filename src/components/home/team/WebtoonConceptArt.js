import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import web from "./img/Webtoon_Concept Art.png";

export default function WebtoonConceptArt() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const onClick = () => {
        history.push(`/works/WebtoonConceptArt`);
    }

    return(
        <div style={style.main_body} onDoubleClick={onClick}>
            <Draggable onDrag={(e, data) => trackPos(data)}>
                <div className="team_web" >
                    <img className="team_web_img" src={web}/>
                    <p style={style.p} className="team_web_title">Webtoon <br/>Concept Art</p>
                </div>
            </Draggable>
        </div>
    )
}

const style = {
    main_body: {
        textAlign:'center',
        width: '130px',
        height: '120px',
    },
    box: {
        width: '130px',
        height: '100px',
        backgroundColor: "red",
        margin:'0',
        borderRadius:"10%",
        // textAlign:'center',
    },
    p: {
        margin: '0',
        fontsize: '14px',
        color:"white",
        wordWrap: 'break-word'
    }
}