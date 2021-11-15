import './onPost.css'
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {postWorks} from "../../components/firebase/postWorks";
import UploadWorkImages from "../../components/post/uploadWorkImages";
import UploadProfile from "../../components/post/uploadProfile";
import UploadThumbNail from "../../components/post/uploadThumbNail";
import PostThumbNail from "../../components/firebase/postThumbNail";

export default function OnPost() {

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
        thumbUrl:'',
        team: ''
    });

    const { name, email, workLink, workTitle, workInfo, youtubeLink, thumbUrl, team } = inputs; // 비구조화 할당을 통해 값 추출

    const [url, setUrl] = useState('')
    // const [team, setTeam] = useState('')
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
        // console.log(value, name)
    };

    const getUrl = (e) => {
      setUrl(e.target.value);
    }

    const onPost = async () => {
        console.log(team)
        console.log(url)
        console.log(inputs)
        await postWorks(team, url, inputs);
        await PostThumbNail(team, url, thumbUrl, workTitle, name);

        // history.push(`/works/${team}/${url}`);
        // console.log(url);
    };

    // 이미지에게 할당된 URL 가져오기
    const getImgUrl = (text) => {
        inputs.profileUrl = text;
    }

    const getWorksUrl = (text) => {
        inputs.worksUrl = text;
    }

    const getThumbUrl = (text) => {
        inputs.thumbUrl = text;
    }

    const handleChange = () => {
        const target = document.getElementById("selectBox"); //select 요소 가져오기
        const value = target.options[target.selectedIndex].value; //select에서 선택된 option의 value값 가져오기
        const name = 'team'; // 변수 inputs의 name을 team으로 지정
        // console.log(target)
        // console.log(value)
        setInputs({
                ...inputs,
                [name]: value
        })
        // console.log(value, name)
    }
    // console.log(name)
    // console.log(team)

    return (
        <>
            <div className="works">
                <div className="student_info">
                    <div className="select_url">
                        <p>이 작품의 주소와 팀 이름</p>
                        <input name="url" onChange={getUrl} value={url} placeholder="주소"/>
                        {/*<input name="team" onChange={onChange} value={team} placeholder="팀 이름"/>*/}
                        <select id="selectBox" onChange={handleChange}>
                            <option name="team" value="MotionGraphics">Motion Graphics</option>
                            <option name="team" value="Animation">Animation</option>
                            <option name="team" value="VFX_SFX">VFX / SFX</option>
                            <option name="team" value="Game">Game</option>
                            <option name="team" value="InteractionDesign">Interaction Design</option>
                            <option name="team" value="WebtoonConceptArt">Webtoon Concept Art </option>
                        </select>
                    </div>
                    <div className="post_thumbNail">
                        <p>썸네일</p>
                        <UploadThumbNail getThumbUrl={getThumbUrl} teamName={team} directory={url}/>
                    </div>
                    <div className="student_picture">
                        <p>학생 사진</p>
                        <UploadProfile getImgUrl={getImgUrl} teamName={team} directory={url}/>
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
                        <UploadWorkImages getWorksUrl={getWorksUrl} teamName={team} directory={url}/>
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