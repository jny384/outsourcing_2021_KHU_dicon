import React from "react";
import {useHistory} from "react-router-dom";

export default function Game() {
    const history = useHistory();
    const onClick = () => {
        history.push(`/works/Game`);
    }

    return(
        <div>
            <div style={style.main_body} onClick={onClick}>
                <div style={style.box}>team</div>
                <p style={style.p}>Game</p>
            </div>
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