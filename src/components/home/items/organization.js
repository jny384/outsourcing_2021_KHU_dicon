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
        <>
            <div className="home_icon link_body_com" style={style.main_body}>
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_org"  onDoubleClick={handleClick} onTouchStart={handleClick}>
                        <img
                            src={'https://firebasestorage.googleapis.com/v0/b/dicon-2021.appspot.com/o/about_cookie.gif?alt=media&token=53081ced-b58f-4645-a23f-8e3180c48efd' || "http://via.placeholde.com/300"}
                            alt="firebase-image"
                            className="home_org_img"
                        />
                        <p style={style.p} className="home_org_title">about_COOKIE</p>
                    </div>
                </Draggable>
            </div>
            <div className="home_icon link_body_mobile" style={style.main_body} onClick={handleClick}>
                <div className="home_org" >
                    <img
                        src={'https://firebasestorage.googleapis.com/v0/b/dicon-2021.appspot.com/o/about_cookie.gif?alt=media&token=53081ced-b58f-4645-a23f-8e3180c48efd' || "http://via.placeholde.com/300"}
                        alt="firebase-image"
                        className="home_org_img"
                    />
                    <p style={style.p} className="home_org_title">about_COOKIE</p>
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