import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export default function Auth() {
    const history = useHistory();
    const pwd = 'diconjoljun2021';
    const [input, setInput] = useState('');

    const getPwd = (e) => {
        setInput(e.target.value)
    }

    const compare = () => {
        if (input == pwd) {
            history.push('/admin')
        }
    }
    return(
        <div style={style.main_body}>
            <p style={style.p}>관리자 전용 페이지입니다.</p>
            <div style={style.inputBox}>
                <input style={style.input} type="password" placeholder="비밀번호를 입력하시오" onChange={getPwd}/>
                <button style={style.button} onClick={compare}>go</button>
            </div>

        </div>
    )
}

const style = {
    main_body: {
        display: 'flex',
        alignItems: 'center',
        textAlign:'center',
        flexDirection:'column',
        height: '87vh',
        justifyContent: 'center'
    },
    p: {
        margin: '0',
        fontsize: '24px',
        fontWeight:'bold',
        color:"white"

    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '100px'
    },
    button:{
        width: '50px',
        height: '50px',
        border: 'none',
        backgroundColor: 'red'
    },
    input: {
        border: 'none',
        borderRadius:'0',
        height: '50px',
        padding:'0',
        margin: '0'
    }
}