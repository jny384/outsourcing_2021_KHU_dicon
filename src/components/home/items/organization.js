import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";

export default function Organization() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        history.push(`/2021_KHU_dicon`);
    };

    return(
        <div className="home_icon" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_org" >
                    <img
                        src={'https://firebasestorage.googleapis.com/v0/b/dicon-2021.appspot.com/o/images%2F2D%2Fadwad%2Fworks%2Fabout_cookie.gif?alt=media&token=6ff9b832-7d27-46ce-afcf-e8d92219e217' || "http://via.placeholde.com/300"}
                        alt="firebase-image"
                        className="home_org_img"
                    />
                    <p style={style.p} className="home_org_title">about_COOKIE</p>
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
        // width: '130px',
        // height: '100px',
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