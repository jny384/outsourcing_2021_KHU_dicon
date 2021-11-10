import React, {useState} from "react";
import storage from "../firebase/firebase-manager";
import {useHistory} from "react-router-dom";
// import Ge
// import GetProfileImage from "./getProfileImage";

export default function UploadProfile(props) {
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [progress, setProgress] = useState(0);
    // const [directory, setDirectory] = useState("");

    // const history = useHistory();
    const directory = props.directory;
    const teamName = props.teamName;

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // const handleChangeDirectory = (e) => {
    //     setDirectory(e.target.value);
    // }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${teamName}/${directory}/profile/${image.name}`).put(image);
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
                    .ref(`images/${teamName}/${directory}/profile`)
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        console.log("url : ", url);

                        props.getImgUrl(url);
                        // if (url != '') {GetProfileImage(url);}
                    })
            }
        );
    }

    // console.log("image : ", image);
    // console.log("url : ", url);
    // const sendText = () => {
    // }
    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {props.getImgUrl}
            {/*<input onChange={handleChangeDirectory} placeholder="저장 폴더 이름"/>*/}
            <br/>
            <input type="file" multiple onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            {/*<a onClick={sendText}>send</a>*/}
            <br/>
            <img
                     src={url || "http://via.placeholde.com/300"}
                     alt="firebase-image"
                     style={{width: "100px"}}
            />
            <br/>
            {/*<a href={url}>*/}
            {/*    {url}*/}
            {/*    /!*<GetProfileImage url={url}/>*!/*/}
            {/*    /!*<getPro url={url}/>*!/*/}
            {/*</a>*/}
        </>
    )
}