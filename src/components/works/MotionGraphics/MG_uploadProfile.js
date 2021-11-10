import React, {useState} from "react";
import storage from "../../firebase/firebase-manager";

export default function MG_uploadProfile(props) {
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [progress, setProgress] = useState(0);

    const directory = props.directory;

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/MotionGraphics/${directory}/profile/${image.name}`).put(image);
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
                    .ref(`images/MotionGraphics/${directory}/profile`)
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        console.log("url : ", url);

                        props.getImgUrl(url);
                    })
            }
        );
    }

    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {props.getImgUrl}
            <br/>
            <input type="file" multiple onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            <img
                src={url || "http://via.placeholde.com/300"}
                alt="firebase-image"
                style={{width: "100px"}}
            />
            <br/>
        </>
    )
}