import './HomeView.css';
import './footer.css'
import React, {useState, useEffect} from "react";

// import DecoIMG from "./decoIMG";
import InstaLink from "../../components/home/items/instaLink";
import YoutubeLink from "../../components/home/items/youtubeLink";

import Admin from "../../components/home/items/admin";
import Organization from "../../components/home/items/organization";
import Guest from "../../components/home/items/guest";
import Professor from "../../components/home/items/professor";
import Banner from "../../components/home/items/banner";

import MotionGraphics from "../../components/home/team/MotionGraphics";
import Animation from "../../components/home/team/Animation";
import VFX_SFX from "../../components/home/team/VFX_SFX";
import Game from "../../components/home/team/Game";
import InterActionDesign from "../../components/home/team/InterActionDesign";
import WebtoonConceptArt from "../../components/home/team/WebtoonConceptArt";
// import Notice from "../../components/home/items/notice";
import Trash from "../../components/home/items/trash";

import Draggable from "react-draggable";

import deco from './img/notice.png';
import deco1 from './img/typo_poster.png';
import deco2 from './img/photo_final2222.png';
import deco3 from './img/trash can.png';

import video from './img/backdrop.mp4'

function HomeView() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const [statusNotice, setStatusNotice] = useState(true);
    const [statusTypo, setStatusTypo] = useState(false);
    const [statusPhoto, setStatusPhoto] = useState(false);
    const [statusTrash, setStatusTrash] =useState(false);
    // useEffect(()=>{
    //     if (window.localStorage.getItem("visited") == true) {
    //         setStatusNotice(false);
    //     }
    // }, [])
    const openModalNotice = () => {
        if (statusTypo === true || statusPhoto === true || statusTrash === true) {
            setStatusTypo(false);
            setStatusPhoto(false);
            setStatusTrash(false);
        }
        else {
            setStatusNotice(!statusNotice);
        }
    };
    const openModalTypo = () => {
        if (statusNotice === true || statusPhoto === true || statusTrash === true) {
            setStatusNotice(false);
            setStatusPhoto(false);
            setStatusTrash(false);
        }
        else {
            setStatusTypo(!statusTypo);
        }
    };
    const openModalPhoto = () => {
        if (statusTypo === true || statusNotice === true || statusTrash === true) {
            setStatusTypo(false);
            setStatusNotice(false);
            setStatusTrash(false);
        }
        else {
            setStatusPhoto(!statusPhoto);
        }
    };
    const openModalTrash = () => {
        if (statusTypo === true || statusNotice === true || statusPhoto === true) {
            setStatusTypo(false);
            setStatusNotice(false);
            setStatusPhoto(false);
        } else {
            setStatusTrash(!statusTrash);
        }
    }

    const closeModal = () => {
        setStatusPhoto(false);
        setStatusNotice(false);
        setStatusTypo(false);
        setStatusTrash(false);
    }
    return (
        <>

            <div>
                <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline

                    style={{
                        position: 'absolute',
                        width : "100%",
                        left : '0',
                        top: "0",
                        objectFit: 'cover',
                        zIndex:'10'
                    }}
                    height="auto" className="video_back">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="hommeWrap" onClick={closeModal}>
                    <div className="home_link">
                        <InstaLink/>
                        <YoutubeLink/>
                    </div>
                    <div onClick={closeModal} className="deco" style={style.main_body}>
                        <Draggable onDrag={(e, data) => trackPos(data)} >
                            <div className="home_notice" style={style.deco_image} onDoubleClick={openModalNotice} onTouchStart={openModalNotice}>
                                <img src={deco} className="home_notice_img" onDragStart="return true"/>
                                <p style={style.p} className="home_notice_title"> Notice.txt</p>

                            </div>
                        </Draggable>
                    </div>
                    <div onClick={closeModal} className="deco_1" style={style.main_body}>
                        <Draggable onDrag={(e, data) => trackPos(data)} >
                            <div className="home_type" style={style.deco_image} onDoubleClick={openModalTypo}  onTouchStart={openModalTypo}>
                                <img src={deco1} className="home_type_img"/>
                                <p style={style.p} className="home_type_title">typo_poster.jpg</p>
                            </div>
                        </Draggable>
                    </div>
                    <div className="deco2" onClick={closeModal} style={style.main_body}>
                        <Draggable onDrag={(e, data) => trackPos(data)} >
                            <div className="home_photo" style={style.deco_image} onDoubleClick={openModalPhoto}  onTouchStart={openModalPhoto}>
                                <img src={deco2} className="home_photo_img"/>
                                <p style={style.newp} className="home_photo_title">photo_final2222.jpg</p>
                            </div>
                        </Draggable>
                    </div>
                    <div onClick={closeModal} className="home_icon" style={style.main_body}>
                        <Draggable onDrag={(e, data) => trackPos(data)} >
                            <div className="home_trash"  onDoubleClick={openModalTrash} onTouchStart={openModalTrash}>
                                <img className="home_trash_img" src={deco3}/>
                                <p style={style.p} className="home_trash_title">trash can</p>
                            </div>
                        </Draggable>
                    </div>
                    <div style={style.footer_txt}>
                        <p id="footer_text">KyungHee Univ. Dicon 2021 Degree Show</p>
                    </div>
                    <Admin/>
                    <Organization/>
                    <Guest/>
                    <Professor/>
                    <Banner/>
                    <MotionGraphics/>
                    <Animation/>
                    <VFX_SFX/>
                    <Game/>
                    <InterActionDesign/>
                    <WebtoonConceptArt/>


                    {statusNotice ? (
                        <div onClick={closeModal} className="pop_image_n">
                            <img className="pop_photo_n" onClick={closeModal} src={deco}/>
                        </div>
                    ):null}
                    {statusTypo ? (
                        <div onClick={closeModal} className="pop_image">
                            <img onClick={closeModal} className="pop_photo" src={deco1}/>
                        </div>
                    ):null}
                    {statusPhoto ? (
                        <div onClick={closeModal} className="pop_image">
                            <img onClick={closeModal} className="pop_photo" src={deco2}/>
                        </div>
                    ):null}
                    {statusTrash ? (
                        <div onClick={closeModal} className="pop_image">
                            <img
                                onClick={closeModal}
                                src={'https://firebasestorage.googleapis.com/v0/b/dicon-2021.appspot.com/o/trashcan_gif.gif?alt=media&token=62682d0f-9238-4947-b952-cccea2bff68f' || "http://via.placeholde.com/300"}
                                alt="firebase-image"
                                className="pop_photo pop_photo_trash"
                            />
                        </div>
                    ):null}

                </div>

            </div>
        </>
    );
}
export default HomeView;


const style = {
    footer_txt : {
      width: '100vw',
      textAlign:'center',
        position:'fixed',
        bottom: '10px'
    },
    main_body: {
        textAlign:'center',
        // width: '120px',,
        height: 'auto',
    },
    box: {
        // width: '120px',
        // height: '120px',
        // backgroundColor: "red",
        margin:'0',
        borderRadius:"100%"
    },
    set_box: {
        width: 'auto',
        // height: '50vh',
        // // backgroundColor: "blue",
        position: 'absolute',
        // top: '10vh',
        // left: '30%',

        zIndex: '100'
    },
    set_box2: {
        width: 'auto',
        height: '80vh',
        // backgroundColor: "blue",
        position: 'fixed',
        top: '10vh',
        // left: '30vw',

        zIndex: '100'
    },
    set_body: {
        display: 'flex',
        position: 'absolute',
        width: '100vw',
        alignItems:'center'

    },
    p: {
        margin: '0px',
        color:"white"
    },
    deco_image: {
        position: 'relative',
        // left: '50%',
        zIndex:'1',
        // width: '100%'
    },
    newp: {
        margin: '5px',
        color:"white"
    },
}