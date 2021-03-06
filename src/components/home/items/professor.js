import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";

import professor from '../../../views/home/img/about_dicon.png'

export default function Professor() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        history.push(`/professor`);
    };

    return(
        <>
            <div className="home_icon link_body_com" style={style.main_body}>
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_professor"  onDoubleClick={handleClick} onTouchStart={handleClick}>
                        <img className="home_professor_img" src={professor}/>
                        <p style={style.p} className="home_professor_title">about_DICON</p>
                    </div>
                </Draggable>
            </div>
            <div className="home_icon link_body_mobile" onClick={handleClick} style={style.main_body}>
                <div className="home_professor"  >
                    <img className="home_professor_img" src={professor}/>
                    <p style={style.p} className="home_professor_title">about_DICON</p>
                </div>
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
}