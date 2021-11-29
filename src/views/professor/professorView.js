import React from "react";
import './professorView.css'

import kim from './img/김혜경_교수님.jpg'
import hyun from './img/김숭현_교수님.jpg'
import bae from './img/배민정_교수님대체.jpg'
import lee from './img/이태훈_교수님.jpg'
import jeong from './img/장우린_교수님.jpg'


export default function ProfessorView() {
    return(
        <>
            <div className="professor_main">
                <div className="major">
                    <p className="major_title">학과 소개</p>
                    <p className="major_detail">디지털콘텐츠 전공은 멀티미디어 형식으로 보여지는 디지털게임, 디지털영상, 애니메이션 등의 기획과 연출, 다양한 시각적 표현과 디자인, 유통에 관한 연구를 통해 컴퓨터와 디지털 이미지, 출판과 방송, 게임과 영상 산업이 혼합되고 있는 디지털 시대의 정보와 커뮤니케이션의 영역을 확장하고 새로운 가능성을 탐구하는 전공이다. 이를 위해 콘텐츠의 개념과 산업에 대한 이해, 산학 프로젝트를 통한 기획, 연출 및 시나리오, 디자인, 사운드, 프로그래밍, 마케팅 과정의 경험과 이론적 연구를 병행한다.</p>
                    <p className="professor_title">교수 소개</p>
                </div>
                <div className="professor_list">
                    <div className="professor">

                        <div className="professor_right">
                            <img
                                className="professor_img"
                                src={kim}
                            />
                            <div className="professor_info">
                                <p id="professor_name">김혜경 교수</p>
                                <p className="professor_place">예술디자인대학관 711호</p>
                                <p className="professor_email">hkkim@khu.ac.kr</p>
                                <p id="professor_detail_r">LG 소프트 멀티미디어 제작팀에 근무하였으며 개인전 3회 및 다수의 전시에 참여하였다. SIGGRAPH 2006 Art Gallery에 작품 선정이 되었고 Art Sketch에서 발표하였다. 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                            </div>
                        </div>
                        <div className="professor_detail">
                            <p style={{color: '#7B7B7B'}}>LG 소프트 멀티미디어 제작팀에 근무하였으며 개인전 3회 및 다수의 전시에 참여하였다. SIGGRAPH 2006 Art Gallery에 작품 선정이 되었고 Art Sketch에서 발표하였다. 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                        </div>
                    </div>
                    <div className="professor">
                        <div className="professor_right">

                            <img
                                className="professor_img"
                                src={jeong}
                            />
                            <div className="professor_info">
                                <p id="professor_name">장우린 교수</p>

                                <p className="professor_place">예술디자인대학관 712호</p>
                                <p className="professor_email">david@khu.ac.kr</p>
                                <p id="professor_detail_r">대한민국 게임대상 심사위원, 콘텐츠진흥원 캐릭터산업 연계 프로젝트 심사위원장, 콘텐츠진흥원 장비 지원 프로젝트/국내 대학 콘텐츠 융합형 프로그램, 방송 통신전파진흥원 수행 책임자를 역임하였다. 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                            </div>
                        </div>
                        <div className="professor_detail">
                            <p style={{color: '#7B7B7B'}}>대한민국 게임대상 심사위원, 콘텐츠진흥원 캐릭터산업 연계 프로젝트 심사위원장, 콘텐츠진흥원 장비 지원 프로젝트/국내 대학 콘텐츠 융합형 프로그램, 방송 통신전파진흥원 수행 책임자를 역임하였다. 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                        </div>
                    </div>
                    <div className="professor">
                        <div className="professor_right">

                            <img
                                className="professor_img"
                                src={lee}
                            />
                            <div className="professor_info">
                                <p id="professor_name">이태훈 교수</p>

                                <p className="professor_place">예술디자인대학관 710호</p>
                                <p className="professor_email">thlee1401@khu.ac.kr</p>
                                <p id="professor_detail_r">영화사 (주) 프론트 라인 감독 재직을 하였고, 서울여자대학교 시각디자인과 겸임교수를 역임하였다 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                            </div>
                        </div>
                        <div className="professor_detail">
                            <p style={{color: '#7B7B7B'}}>영화사 (주) 프론트 라인 감독 재직을 하였고, 서울여자대학교 시각디자인과 겸임교수를 역임하였다 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 교수를 역임하고 있다.</p>
                        </div>
                    </div>
                    <div className="professor">
                        <div className="professor_right">
                            <img
                                className="professor_img"
                                src={hyun}
                            />
                            <div className="professor_info">
                                <p id="professor_name">김숭현 교수</p>

                                <p className="professor_place">예술디자인대학관 709호</p>
                                <p className="professor_email">soong@khu.ac.kr</p>
                                <p id="professor_detail_r">Big Fish Games, Inc. 3D 캐릭터 애니메이터, KAIST 문화기술대학원, VML 연구원, KAISTUDIO 아트디렉터, 영남대학교 디자인미술대학 시각디자인학과 부교수를 역임하였고 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 부교수를 역임하고 있다.</p>
                            </div>
                        </div>
                        <div className="professor_detail">
                            <p style={{color: '#7B7B7B'}}>Big Fish Games, Inc. 3D 캐릭터 애니메이터, KAIST 문화기술대학원, VML 연구원, KAISTUDIO 아트디렉터, 영남대학교 디자인미술대학 시각디자인학과 부교수를 역임하였고 현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 부교수를 역임하고 있다.</p>
                        </div>
                    </div>
                    <div className="professor">
                        <div className="professor_right">
                            <img
                                className="professor_img"
                                src={bae}
                            />
                            <div className="professor_info">
                                <p id="professor_name">배민정 교수</p>

                                <p className="professor_place">Visual Artist</p>
                                <p className="professor_email">venecys@gmail.com</p>
                                <p id="professor_detail_r">현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 지도 교수를 역임하고 있다.</p>
                            </div>
                        </div>
                        <div className="professor_detail">
                            <p style={{color: '#7B7B7B'}}>현재 경희대학교 예술디자인대학 디지털 콘텐츠전공 지도 교수를 역임하고 있다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
    )
}