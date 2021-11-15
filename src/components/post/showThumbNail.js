import React from "react";

export default function ShowThumbNail(props) {
    return(
        <div style={style.component}>
            <div style={style.thumb}>
                <a href={props.url}>
                    <img
                        src={props.thumbUrl}
                        alt="thumbNail"
                        style={{width: "394px", height : "534px"}}
                    />
                </a>
            </div>
            <p style={style.title}>{props.title}</p>
            <p style={style.name}>{props.name}</p>
        </div>
    )
}

const style = {
    component : {
        display: 'grid',

        gridColumnGap: '23px',
        gridRowGap: '50px',
        textAlign:'center'
    },
    thumb:{
        width:'330px',
        height:'440px'
    },
    title:{
        fontsize: '24px'
    },
    name:{
        fontsize: '18px'
    }
}