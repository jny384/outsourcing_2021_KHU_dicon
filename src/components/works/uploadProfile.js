import React, {useState} from "react";
import storage from "../firebase/firebase-manager";

export default function UploadProfile(props) {
    const [image, setImage] = useState([]);
    const [url, setUrl] = useState([]);
    const [progress, setProgress] = useState(0);
    // const [directory, setDirectory] = useState("");

    const directory = props.directory;

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // const handleChangeDirectory = (e) => {
    //     setDirectory(e.target.value);
    // }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${directory}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                    });
            }
        );
    }

    // console.log("image : ", image);
    // console.log("urls : ", url);

    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {/*<input onChange={handleChangeDirectory} placeholder="저장 폴더 이름"/>*/}
            <br/>
            <input type="file" multiple onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            <img
                     src={url || "http://via.placeholde.com/300"}
                     alt="firebase-image"
                     style={{width: "100px"}}
            />
        </>
    )
}