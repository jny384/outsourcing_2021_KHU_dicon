import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export default function Admin() {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/write`);
    };

    return(
        <div className="admin" style={style.main_body} onDoubleClick={handleClick}>
            <div className="box" >
                <div style={style.box}>관리자</div>
                <p style={style.p}>관리자 접근</p>
            </div>
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