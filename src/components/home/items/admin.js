import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import staff from "../../../views/home/img/staff_only.png";

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
        <div className="home_icon" style={style.main_body}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_staff"  onDoubleClick={handleClick}  onTouchStart={handleClick} >
                    <img className="home_staff_img" src={staff}/>
                    <p className="home_staff_title">STAFF_ONLY</p>
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