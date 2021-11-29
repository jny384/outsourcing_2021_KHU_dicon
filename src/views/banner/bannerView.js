import React, {useEffect, useState} from "react";
import GetBanner from "../../components/firebase/getBanner";
import PopUpBanner from "./popUpBanner";
import './bannerView.css'
export default function BannerView() {

    const [inputData, setInputData] = useState([]);
    useEffect(() => {
        exec();
        console.log('iP : ',inputData);
    }, [])

    async function exec(){
        const data =  await GetBanner();
        await setInputData(data);
    }


    const [status, setStatus] = useState(false);
    const [imageNum, setImageNum] = useState(null);
    const openModal = (index) => {
        setStatus(!status);
        setImageNum(index);
    };
    //popup 모달을 끄기 위한 함수(어느 곳을 클릭해도 모달이 꺼지게게
    const closeModal = () => {
        if (status == true) {
            setStatus(false);
            setImageNum(null);
        }
    }

    // const thumbUrl = inputData.thumbUrl;
    // console.log(inputData[0].bannerUrl)
    return(
        <>
            <div className="bannerViewMain">
                <div className="banner_top">
                    <span className="banner_title">online_banner</span>
                    <div className="banner_main">
                        {
                            inputData.map((item, index) => {
                                return(
                                    <div key={index} className="banner_list">
                                        <div onClick={openModal} className="banner_container">
                                            <img
                                                className="banner"
                                                src={item.bannerUrl}
                                                alt="OnlineBanner"
                                            />
                                            <div className="banner_under">
                                                <span>From. {item.from}</span>
                                                <span>To. {item.to}</span>
                                            </div>
                                        </div>
                                        {/*{status ? (*/}
                                        {/*    <PopUpBanner data={inputData} index={index}/>*/}
                                        {/*):null}*/}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>

    )
}

const style = {
    component : {
        display: 'grid',

        gridColumnGap: '23px',
        gridRowGap: '50px',
        textAlign:'center',
        color:'white'
    },
    thumb:{
        width:'330px',
        height:'440px'
    },
    title:{
        fontsize: '24px',
        textDecoration:'none'

    },
    name:{
        fontsize: '18px',
        textDecoration:'none'
    },
}