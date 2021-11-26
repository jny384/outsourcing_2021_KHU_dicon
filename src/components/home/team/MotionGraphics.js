import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";

import twoD from './img/2D.png'

export default function MotionGraphics() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const onClick = () => {
        history.push(`/works/2D`);
    }

    return(
        <div style={style.main_body} onDoubleClick={onClick}  onTouchStart={onClick}>
            <Draggable onDrag={(e, data) => trackPos(data)}>
                <div className="team_2D" >
                    <img className="team_2D_img" src={twoD}/>
                    <p style={style.p} className="team_2D_title">2D</p>
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
        color:"white"
    }
}