import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import book from "../../../views/home/img/guest_book.png";

export default function Guest() {
    const history = useHistory();

    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleClick = () => {
        history.push(`/guest`);
    };

    return(
        <>
            <div className="home_icon link_body_com" style={style.main_body} >
                <Draggable onDrag={(e, data) => trackPos(data)} >
                    <div className="home_book" onDoubleClick={handleClick} onTouchStart={handleClick} >
                        <img className="home_book_img" src={book}/>
                        <p style={style.p} className="home_book_title">Guest_book</p>
                    </div>
                </Draggable>
            </div>
            <div className="home_icon link_body_mobile" style={style.main_body} >
                <div className="home_book" onClick={handleClick} >
                    <img className="home_book_img" src={book}/>
                    <p style={style.p} className="home_book_title">Guest_book</p>
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
        width: '130px',
        height: '100px',
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