import React from "react";
import {useHistory} from "react-router-dom";

export default function VFX_SFX() {
    const history = useHistory();
    const onClick = () => {
        history.push(`/works/VFX_SFX`);
    }

    return(
        <div>
            <div style={style.main_body} onClick={onClick}>
                <div style={style.box}>team</div>
                <p style={style.p}>VFX / SFX</p>
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