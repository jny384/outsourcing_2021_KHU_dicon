import React, {useState} from "react";
import Draggable from "react-draggable";

export default function InstaLink() {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };
    const handleClick = (e) => {
        window.location.href = 'https://www.instagram.com'; //이동할 링크
    };

    return(
        <div className="main_body" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="box" >
                    <div style={style.box}>인스타</div>
                    <p style={style.p}>Instagram Link</p>
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
        backgroundColor: "pink",
        margin:'0',
        borderRadius:"10%"
    },
    p: {
        margin: '0',
        fontsize: '14px',
        color:"white"
    }
}