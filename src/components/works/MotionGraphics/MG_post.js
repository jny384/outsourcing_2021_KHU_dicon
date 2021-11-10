import '../../../views/admin/onPost.css'
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {MG_postWorks} from "./MG_postWorks";
import MG_uploadProfile from "./MG_uploadProfile";
import MG_uploadWorks from "./MG_uploadWorks";

export default function MG_post() {
    const history = useHistory();

    const [inputs, setInputs] = useState({
        name: '',
        email : '',
        workLink: '',
        workTitle : '',
        workInfo : '',
        youtubeLink : '',
        profileUrl: '',
        worksUrl : [],
    });

    const { name, email, workLink, workTitle, workInfo, youtubeLink } = inputs; // 비구조화 할당을 통해 값 추출

    const [url, setUrl] = useState('')

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const getUrl = (e) => {
        setUrl(e.target.value);
        // console.log(setUrl)
    }

    const onPost = async () => {
        history.push(`/works/MotionGraphics/${url}`);
        await MG_postWorks(url, inputs).then(() => {
        })
        // await GetData(url);
        // localStorage.setItem('url',url);
        // console.log(url);
    };

    // const [profileUrl, setProfileUrl] = useState()
    const getImgUrl = (text) => {
        inputs.profileUrl = text;
    }

    const getWorksUrl = (text) => {
        inputs.worksUrl = text;
    }

    return (
        <>
            <div className="works">
                <div className="student_info">
                    <div className="select_url">
                        <p>이 작품의 주소와 팀 이름</p>
                        <input name="url" onChange={getUrl} value={url} placeholder="주소"/>
                    </div>
                    <div className="student_picture">
                        <p>학생 사진</p>
                        <MG_uploadProfile getImgUrl={getImgUrl} directory={url}/>
                    </div>
                    <div className="student_name">
                        <p> 학생 이름</p>
                        <input name="name" placeholder="이름" onChange={onChange} value={name}/>
                    </div>
                    <div className="student_email">
                        <p>학생 이메일</p>
                        <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
                    </div>
                    <div className="student_link">
                        <p>학생 작품 링크</p>
                        <input name="workLink" placeholder="작품 링크" onChange={onChange} value={workLink}/>
                    </div>
                </div>
                <div className="student_work">
                    <div className="work_title">
                        <p> 작품 제목 </p>
                        <input name="workTitle" placeholder="제목" onChange={onChange} value={workTitle}/>
                    </div>
                    <div className="work_detail">
                        <p>작품 설명</p>
                        <textarea name="workInfo" placeholder="설명" onChange={onChange} value={workInfo} id="workInfo"/>
                    </div>
                    <div className="work_link">
                        <p>작품 유튜브 링크</p>
                        <input name="youtubeLink" placeholder="유튜브" onChange={onChange} value={youtubeLink}/>
                    </div>
                    <div className="work_image">
                        <p>작품 사진들</p>
                        <MG_uploadWorks getWorksUrl={getWorksUrl} directory={url}/>
                    </div>
                </div>
                <div>
                    <div className="post_btn" >
                        <button id="btn_toPost" onClick={onPost}>upload</button>
                    </div>
                </div>
            </div>

        </>
    );
}