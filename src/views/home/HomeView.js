import './HomeView.css';
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

function HomeView() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const [statusNotice, setStatusNotice] = useState(true)
    const [statusTypo, setStatusTypo] = useState(false)
    const [statusPhoto, setStatusPhoto] = useState(false)

    // useEffect(()=>{
    //     if (window.localStorage.getItem("visited") == true) {
    //         setStatusNotice(false);
    //     }
    // }, [])
    const openModalNotice = () => {
        if (statusTypo === true || statusPhoto === true) {
            setStatusTypo(false);
            setStatusPhoto(false);
        }
        else {
            setStatusNotice(!statusNotice);
        }
    };
    const openModalTypo = () => {
        if (statusNotice === true || statusPhoto === true) {
            setStatusNotice(false);
            setStatusPhoto(false);
        }
        else {
            setStatusTypo(!statusTypo);
        }
    };
    const openModalPhoto = () => {
        if (statusTypo === true || statusNotice === true) {
            setStatusTypo(false);
            setStatusNotice(false);
        }
        else {
            setStatusPhoto(!statusPhoto);
        }
    };

    const closeModal = () => {
        setStatusPhoto(false);
        setStatusNotice(false);
        setStatusTypo(false);
        // window.localStorage.setItem('visited', 1)
    }
    return (
        <>
            <div className="hommeWrap" onClick={closeModal}>
                <div className="home_link">
                    <InstaLink/>
                    <YoutubeLink/>
                </div>
                <div onClick={closeModal} className="deco" style={style.main_body}>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="home_notice" style={style.deco_image} onDoubleClick={openModalNotice} onTouchStart={openModalNotice}>
                            <img src={deco} className="home_notice_img" onDragStart="return true"/>
                            <p style={style.p} className="home_notice_title">typo_poster.jpg</p>
                        </div>
                    </Draggable>
                    {/*{statusNotice ? (*/}
                    {/*    <div onClick={closeModal} className="pop_image_n">*/}
                    {/*        <img className="pop_photo_n" onClick={closeModal} src={deco}/>*/}
                    {/*    </div>*/}
                    {/*):null}*/}
                </div>
                <div onClick={closeModal} className="deco_1" style={style.main_body}>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="home_type" style={style.deco_image} onDoubleClick={openModalTypo}  onTouchStart={openModalTypo}>
                            <img src={deco1} className="home_type_img"/>
                            <p style={style.p} className="home_type_title">typo_poster.jpg</p>
                        </div>
                    </Draggable>
                    {/*{statusTypo ? (*/}
                    {/*    <div onClick={closeModal} className="pop_image">*/}
                    {/*        <img onClick={closeModal} className="pop_photo" src={deco1}/>*/}
                    {/*    </div>*/}
                    {/*):null}*/}
                </div>
                <div className="deco2" onClick={closeModal} style={style.main_body}>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="home_photo" style={style.deco_image} onDoubleClick={openModalPhoto}  onTouchStart={openModalPhoto}>
                            <img src={deco2} className="home_photo_img"/>
                            <p style={style.newp} className="home_photo_title">photo_final2222.jpg</p>
                        </div>
                    </Draggable>
                    {/*{statusPhoto ? (*/}
                    {/*    <div onClick={closeModal} className="pop_image">*/}
                    {/*        <img onClick={closeModal} className="pop_photo" src={deco2}/>*/}
                    {/*    </div>*/}
                    {/*):null}*/}
                </div>
                <Trash/>
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
            </div>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
    );
}
export default HomeView;


const style = {
    main_body: {
        textAlign:'center',
        width: '120px',
        height: 'auto',
    },
    box: {
        width: '120px',
        height: '120px',
        // backgroundColor: "red",
        margin:'0',
        borderRadius:"100%"
    },
    set_box: {
        width: 'auto',
        height: '50vh',
        // // backgroundColor: "blue",
        position: 'absolute',
        // top: '10vh',
        left: '30%',

        zIndex: '100'
    },
    set_box2: {
        width: 'auto',
        height: '80vh',
        // backgroundColor: "blue",
        position: 'fixed',
        top: '10vh',
        left: '30vw',

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
        left: '50%',
        zIndex:'1',
        // width: '100%'
    },
    newp: {
        margin: '5px',
        color:"white"
    },
}