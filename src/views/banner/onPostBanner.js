// import './onPost.css'
import React, {useState} from "react";
import './onPostBanner.css'
import UploadBanner from "../../components/post/uploadBanner";
import PostBanner from "../../components/firebase/postBanner";

export default function OnPostBanner() {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [url, setUrl] = useState('')

    // const onChange = (e) => {
    //     const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    //     setInputs({
    //         ...inputs, // 기존의 input 객체를 복사한 뒤
    //         [name]: value // name 키를 가진 값을 value 로 설정
    //     });
    //     // console.log(value, name)
    // };

    const onPost = async () => {
        console.log(from)
        console.log(to)
        await PostBanner(url, from, to);
        await window.location.reload();

        // history.push(`/works/${team}/${url}`);
        // console.log(url);
    };

    const getBannerUrl = (text) => {
        setUrl(text);
    }

    const handleFrom = (e) => {
        setFrom(e.target.value);
    }

    const handleTo = (e) => {
        setTo(e.target.value);
    }
    return (
        <>
            <div className="works">
                <div className="upload-banner">
                    <div className="student_info">
                        <div className="select_url">
                            <p>온라인 현수막</p>
                            <div className="inputs_banner">
                                <input type="text" placeholder="From." onChange={handleFrom}/>
                                <input type="text" placeholder="To." onChange={handleTo}/>
                            </div>
                        </div>
                        <div className="uploading">

                            <UploadBanner getBannerUrl={getBannerUrl}/>
                        </div>

                    </div>
                    <button id='btn_toPost' onClick={onPost}>Post</button>
                </div>

            </div>

        </>
    );
}