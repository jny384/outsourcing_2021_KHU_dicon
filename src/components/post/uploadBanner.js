import React, {useState} from "react";
import storage from "../firebase/firebase-manager";

export default function UploadBanner(props) {
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/banner/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images/banner`)
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        console.log("url : ", url);

                        props.getBannerUrl(url);
                        // if (url != '') {GetProfileImage(url);}
                    })
            }
        );
    }
    // console.log("image : ", image);
    // console.log("url : ", url);

    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {props.getBannerUrl}
            {/*<input onChange={handleChangeDirectory} placeholder="저장 폴더 이름"/>*/}
            <br/>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            <img
                src={url || "http://via.placeholde.com/300"}
                alt="profile"
                style={{height: "50px"}}
            />
            <br/>
        </>
    )
}