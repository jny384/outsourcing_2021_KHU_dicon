import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";

export default function Admin() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        history.push(`/auth/admin`);
    };

    return(
        <div className="admin" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="box" >
                    <div style={style.box}>관리자</div>
                    <p style={style.p}>관리자 접근</p>
                </div>
            </Draggable>
        </div>
    )
};

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
        borderRadius:"10%"
    },
    p: {
        margin: '0',
        fontsize: '14px',
        color:"white"
    }
}