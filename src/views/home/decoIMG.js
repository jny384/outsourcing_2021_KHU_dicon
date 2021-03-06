import Draggable from "react-draggable";
import React, {useState} from "react";

//상위 컴포넌트에서 clicked state를 관리해야 되나? 데코 이미지가 차지하는 범위가 작아서 closeModal이 안 먹네

export default function DecoIMG() {
    //draggable 요소를 위한 position 값 관히
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };
    //popup 모달의 열림 여부 관리
    const [status, setStatus] = useState(false)
    const openModal = () => {
      setStatus(!status);
    };
    //popup 모달을 끄기 위한 함수(어느 곳을 클릭해도 모달이 꺼지게게
    const closeModal = () => {
        if (status == true) {
            setStatus(false);
        }
    }
    return(
        <>
            <div onClick={closeModal}>
                <div className="main_body" style={style.main_body}>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="deco_image" style={style.deco_image} onDoubleClick={openModal}>
                            <div style={style.box}>이미지 들어갈 자리</div>
                            {/*<p style={style.p}>deco</p>*/}
                        </div>
                    </Draggable>
                    {status ? (
                        <div onClick={closeModal} className="pop_image" style={style.set_body}>
                            <div onClick={closeModal} style={style.set_box}>이미지 들어갈 자리</div>
                        </div>
                    ):null}
                </div>
            </div>
        </>
    )
}

const style = {
    main_body: {
        textAlign:'center',
        width: '120px',
        height: 'auto',
    },
    box: {
        width: '120px',
        height: '120px',
        backgroundColor: "red",
        margin:'0',
        borderRadius:"100%"
    },
    set_box: {
        width: '80vw',
        height: '80vh',
        backgroundColor: "blue",
        position: 'fixed',
        top: '16vh',
        left: '15vw',

        zIndex: '100'
    },
    set_body: {
        display: 'flex',
    },
    p: {
        margin: '0',
        color:"white"
    },
    deco_image: {
        position: 'relative',
        left: '50%',
        zIndex:'1',
        // width: '100%'
    }
}