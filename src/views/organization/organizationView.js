import React from "react";
import ReactPlayer from "react-player/youtube";
import './organizationView.css'

export default function OrganizationView() {
    return(
        <>
            <div className="organization_main">
                <div className="org_left">
                    image
                </div>
                <div className="org_right">
                    <div className="video">
                        <p className="video_title">홍보 영상</p>
                        <ReactPlayer
                            width="920px"
                            height="518px"
                            align-items="center"
                            url="https://www.youtube.com/watch?v=gqsssi5by38"
                            id="youtubeLink"
                        />
                        <div className="staff">
                            <p className="people">참여해주신 분들</p>
                            <div className="people_detail">
                                <p>촬영 감독</p>
                                <p>촬영 스챕</p>
                                <p>영상 편집</p>
                            </div>
                        </div>
                    </div>
                    <div className="poster">
                        <p className="poster_title">포스터</p>
                        <div className="poster_imgs">
                            <div className="poster_image">image</div>
                            <div className="poster_image">image</div>
                        </div>
                        <div className="poster_staff">
                            <p className="people">참여해주신 분들</p>
                            <p className="people_detail">누구누구</p>
                        </div>
                    </div>
                    <div className="graduate">
                        <p className="graduate_title">졸업 전시 위원회</p>
                        <div className="graduate_img">image</div>
                        <p className="graduate_2021"> 디지털콘텐츠학과 2021학년도 졸업 전시 위원회</p>
                        <p className="people_detail"> 위원장 복찬솔 부위원장 김동규</p>
                        <p className="people_detail"> 파트장 박철호 이상준 이지현 김재인 김다혜 김수아 임승정</p>
                    </div>
                </div>
            </div>
        </>
    )
}