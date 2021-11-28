import React, {useState} from "react";
import Draggable from "react-draggable";
import insta from './img/인스타그램.png';

export default function InstaLink() {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };
    const handleClick = (e) => {
        // window.location.href = 'https://instagram.com/cookie_dicon_2021?utm_medium=copy_link'; //이동할 링크
        window.location.href = 'https://instagram.com/cookie_dicon_2021?utm_medium=copy_link';
    };

    return(
        <div className="main_body insta_body" style={style.main_body}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_insta"  onDoubleClick={handleClick} onTouchStart={handleClick}>
                    <img src={insta} className='home_insta_img'/>
                    <p style={style.p} className='home_insta_title'>@cookie_dicon_2021</p>
                </div>
            </Draggable>
        </div>
    )
};

const style = {
    main_body: {
        textAlign:'center',
        // width: '130px',
        // height: '120px',
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