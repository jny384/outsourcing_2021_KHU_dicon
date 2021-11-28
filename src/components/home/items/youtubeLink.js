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
        <>
            <div className="main_body link_body_com" style={style.main_body}>
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_youtube"  onDoubleClick={handleClick} >
                        <img src={youtube} className='home_youtube_img' onTouchStart={handleClick}/>
                        <p style={style.p} className='home_youtube_title' onTouchStart={handleClick}>Youtube.url</p>
                    </div>
                </Draggable>
            </div>
            <div className="main_body link_body_mobile"  onClick={handleClick} style={style.main_body}>
                <div className="home_youtube"  onClick={handleClick} >
                    <img src={youtube} className='home_youtube_img'/>
                    <p style={style.p} className='home_youtube_title'>Youtube.url</p>
                </div>
            </div>
        </>

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