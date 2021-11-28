import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";

import banner from '../../../views/home/img/online_banner.png';

export default function Banner() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        history.push(`/banner`);
    };

    return(
        <>
            <div className="home_icon link_body_com" style={style.main_body}>
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_banner" onDoubleClick={handleClick} onTouchStart={handleClick} >
                        <img className="home_banner_img" src={banner}/>
                        <p style={style.p} className="home_banner_title">online_banner</p>
                    </div>
                </Draggable>
            </div>
            <div className="home_icon link_body_mobile" style={style.main_body}>
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_banner" onClick={handleClick} >
                        <img className="home_banner_img" src={banner}/>
                        <p style={style.p} className="home_banner_title">online_banner</p>
                    </div>
                </Draggable>
            </div>
        </>
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
        backgroundColor: "orange",
        margin:'0',
        borderRadius:"10%"
    },
    p: {
        margin: '0',
        fontsize: '14px',
        color:"white"
    }
}