import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import notice from "../../../views/home/img/notice.png";

export default function Notice() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        // history.push(`/guest`);
    };

    return(
        <div className="home_icon" style={style.main_body}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_notice"  onDoubleClick={handleClick} onTouchStart={handleClick}>
                    <img className="home_notice_img" src={notice}/>
                    <p style={style.p} className="home_notice_title">Notice.txt</p>
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
        backgroundColor: "yellow",
        margin:'0',
        borderRadius:"10%"
    },
    p: {
        margin: '0',
        // fontsize: '14px',
        color:"white"
    }
}