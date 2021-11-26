import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import vfx from "./img/VFX_SFX.png";

export default function VFX_SFX() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const onClick = () => {
        history.push(`/works/VFX_SFX`);
    }

    return(
        <div style={style.main_body} onDoubleClick={onClick  onTouchStart={openModalNotice}>
            <Draggable onDrag={(e, data) => trackPos(data)}>
                <div className="team_vfx" >
                    <img className="team_vfx_img" src={vfx}/>
                    <p style={style.p} className="team_vfx_title">VFX / SFX</p>
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