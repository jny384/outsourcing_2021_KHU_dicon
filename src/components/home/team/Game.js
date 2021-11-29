import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Draggable from "react-draggable";
import game from "./img/game_folder_mini.png";

export default function Game() {
    const history = useHistory();
    const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const onClick = () => {
        history.push(`/works/Game`);
    }

    return(
        <>
            <div style={style.main_body} className="link_body_com">
                <Draggable onDrag={(e, data) => trackPos(data)}>
                    <div className="team_game"  onDoubleClick={onClick}  onTouchStart={onClick}>
                        <img className="team_game_img" src={game}/>
                        <p style={style.p} className="team_game_title">Game</p>
                    </div>
                </Draggable>
            </div>
            <div style={style.main_body} className="link_body_mobile">
                <div className="team_game"  onClick={onClick}>
                    <img className="team_game_img" src={game}/>
                    <p style={style.p} className="team_game_title">Game</p>
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