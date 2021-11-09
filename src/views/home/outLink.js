import React,{useState} from "react";
import Draggable from "react-draggable";

export default function OutLink() {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };
    const handleClick = (e) => {
        window.location.href = 'https://www.naver.com'; //이동할 링크
    };

    return(
        <div className="main_body" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="box" >
                    <div style={style.box}>이미지 들어갈 자리</div>
                    <p style={style.p}>outLink</p>
                </div>
            </Draggable>
        </div>
    )
};

const style = {
    main_body: {
        textAlign:'center',
        width: '120px',
        height: 'auto',
    },
    box: {
        width: '120px',
        height: '120px',
        backgroundColor: "red",
        margin:'0'
    },
    p: {
        margin: '0'
    }
}