import React, {useState} from "react";
import storage from "../firebase/firebase-manager";

export default function UploadWorkImages(props) {
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    // const [directory, setDirectory] = useState("");
    const directory = props.directory;
    
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i]
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    // const handleChangeDirectory = (e) => {
    //     setDirectory(e.target.value);
    // }

    const handleUpload = () => {
        const promises = []
        images.map((image) => {
            const uploadTask = storage.ref(`images/${directory}/${image.name}`).put(image);
            promises.push(uploadTask);
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
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                        })
                }
            );
        });

        Promise.all(promises)
            // .then(() => {alert("all images uploaded")})
            .catch((err)=> console.log(err))
    };

    // console.log("image : ", images);
    // console.log("urls : ", urls);


    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {/*<input onChange={handleChangeDirectory} placeholder="저장 폴더 이름"/>*/}
            <br/>
            <input type="file" multiple onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            <br/>
            {urls.map((url, i) => (
                <img key={i}
                     src={url || "http://via.placeholde.com/300"}
                     alt="firebase-image"
                     style={{width: "100px"}}
                />
            ))}
        </>
    )
}