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
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            getPwd(e);
            console.log(e.target.value);
        }
    }

    return(
        <>
            <div style={style.main_body}>
                <p style={style.p}><b>Enter Password</b></p>
                <div style={style.inputBox}>
                    <input style={style.input} type="password" placeholder="&nbsp;&nbsp;&nbsp; password" onChange={getPwd} onKeyPress={onKeyPress}/>
                    <button style={style.button} onClick={compare}>→</button>
                </div>
            </div>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
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
        marginTop: '20px'
    },
    button:{
        width: '50px',
        height: '50px',
        border: 'none',
        backgroundColor: 'red',
    },
    input: {
        border: 'none',
        borderRadius:'0',
        height: '50px',
        padding:'0',
        margin: '0',
        width: '300px'
    }
}