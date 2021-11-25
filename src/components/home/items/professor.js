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
        <div className="home_icon" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_professor" >
                    <img className="home_professor_img" src={professor}/>
                    <p style={style.p} className="home_professor_title">about_DICON</p>
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
}