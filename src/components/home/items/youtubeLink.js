import React, {useState} from "react";
import Draggable from "react-draggable";
import youtube from './img/유튜브.png'

export default function YoutubeLink() {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };
    const handleClick = (e) => {
        window.location.href = 'https://youtube.com/channel/UChHuUIP9W4_7FXr8UFZ7aoA'; //이동할 링크
    };

    return(
        <div className="main_body" style={style.main_body} onDoubleClick={handleClick}>
            <Draggable onDrag={(e, data) => trackPos(data)} >
                <div className="home_youtube" >
                    <img src={youtube} className='home_youtube_img'/>
                    <p style={style.p} className='home_youtube_title'>Youtube.url</p>
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