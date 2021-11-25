import React from "react";
import ReactPlayer from "react-player/youtube";
import './organizationView.css'

import cookies from './img/cookies.png'
import poster1 from './img/typo_poster.jpg'
import poster2 from './img/photo_poster.jpg'
import title from './img/title.png'
import photos from './img/졸업전시준비위원회.jpg'

export default function OrganizationView() {
    return(
        <>
            <div className="organization_main">
                <div className="org_top">
                    <img className="org_title" src={title}/>
                    <p className="org_detail">작품 속 엔딩크레딧을 모두 지켜본
                        자에게만 주어지는 선물, 쿠키.<br/>
                        <br/><br/>
                        크레딧 속 이름들, 작품의 진짜 주인공,
                        디지털콘텐츠 아티스트들은 바로 오늘
                        크레딧을 다 지켜본 당신에게 줄 쿠키를 굽고 있다. <br/>
                        <br/><br/>
                        4년 동안 숙성된 반죽, 그리고 참신한 레시피로 바삭하게 구워질 쿠키. <br/>
                        <br/><br/>
                        당신에게 새로운 영감의 맛을 선사할 이 쿠키가 알맞게 익었는지 뒤집어서 확인해보시길.</p>
                </div>
                <div className="org_left">
                    <img className="org_title" src={title}/>
                    <p className="org_detail">작품 속 엔딩크레딧을 모두 지켜본
                        자에게만 주어지는 선물, 쿠키.<br/>
                        <br/><br/>
                        크레딧 속 이름들, 작품의 진짜 주인공,
                        디지털콘텐츠 아티스트들은 바로 오늘
                        크레딧을 다 지켜본 당신에게 줄 쿠키를 굽고 있다. <br/>
                        <br/><br/>
                        4년 동안 숙성된 반죽, 그리고 참신한 레시피로 바삭하게 구워질 쿠키. <br/>
                        <br/><br/>
                        당신에게 새로운 영감의 맛을 선사할 이 쿠키가 알맞게 익었는지 뒤집어서 확인해보시길.</p>
                    <img className="org_cookie" src={cookies}/>
                </div>
                <div className="org_right">
                    <div className="video">
                        <p className="video_title">홍보 영상</p>
                        <ReactPlayer
                            width="920px"
                            height="518px"
                            className="BigVideo"
                            align-items="center"
                            url="https://www.youtube.com/watch?v=Che_ntKjxeI"
                            id="youtubeLink_org"
                        />
                        <ReactPlayer
                            width="654px"
                            height="368px"
                            className="MidVideo"
                            align-items="center"
                            url="https://www.youtube.com/watch?v=Che_ntKjxeI"
                            id="youtubeLink_org"
                        />
                        <ReactPlayer
                            width="500px"
                            height="282px"
                            className="TabVideo"
                            align-items="center"
                            url="https://www.youtube.com/watch?v=Che_ntKjxeI"
                            id="youtubeLink_org"
                        />
                        <ReactPlayer
                            width="328px"
                            height="185px"
                            className="SmallVideo"
                            align-items="center"
                            url="https://www.youtube.com/watch?v=Che_ntKjxeI"
                            id="youtubeLink_org"y
                        />
                        <div className="staff">
                            <p className="people">참여해주신 분들</p>
                            <div className="people_detail">
                                <p id="video_people"><b>촬영 감독</b> 민들레 &nbsp;&nbsp; <b>배우</b> 김금원</p>
                                <p id="video_people"><b>촬영 스탭</b>  김동규, 박지연, 김다혜 &nbsp;&nbsp; <b>미술</b>  조혜연, chomyumyu &nbsp;&nbsp; <b>특별출연</b> 김동우</p>
                                <p id="video_people"><b>Thanks to</b> Hyomu, CHANS_B, irontiger, rimbostarr, Heo Inbeom</p>
                            </div>
                        </div>
                    </div>
                    <div className="poster">
                        <p className="poster_title">포스터</p>
                        <div className="poster_imgs">
                            <img className="poster_image" src={poster1}/>
                            <img className="poster_image" src={poster2}/>
                        </div>
                        <div className="poster_staff">
                            <p className="people">참여해주신 분들</p>
                            <p className="people_detail">
                                <p id="video_people"><b>그래픽포스터 디자인</b> 김진, 강주은 </p>
                                <p id="video_people"><b>실사포스터 디자인</b> 김재인, 이상준 &nbsp;&nbsp; <b>실사포스터 촬영</b> 졸업 전시 위원회 일동</p>
                            </p>
                        </div>
                    </div>
                    <div className="graduate">
                        <p className="graduate_title">졸업 전시 위원회</p>
                        <img className="graduate_img" src={photos}/>
                        <p className="people_detail">
                            <p className="graduate_2021">디지털콘텐츠학과 2021학년도 졸업 전시 위원회</p>
                            <p id="video_people"><b>위원장</b> 복찬솔 &nbsp;&nbsp; <b>부위원장</b> 김동규</p>
                            <p id="video_people"><b>파트장</b> 박철호 이상준 이지현 김재인 김다혜 김수아 임승정</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
    )
}