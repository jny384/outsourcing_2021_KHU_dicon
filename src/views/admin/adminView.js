import React from "react";

export default function AdminView() {
    return(
        <>
            <div style={style.adminBody}>
                <a href="/write" style={style.text}>
                    <div style={style.box}>작품 등록</div>
                </a>
                <a href="/post_banner" style={style.text}>
                    <div style={style.box}>온라인 현수막 등록</div>
                </a>

            </div>
        </>
    )
}

const style = {
    adminBody : {
        display: 'flex',
        width: '100vw',
        height: '95vh',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: '100px',
        height: '50px',
        backgroundColor: '#C4C4C4',
        textAlign: 'center',
        margin: '50px'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none'
    }
}