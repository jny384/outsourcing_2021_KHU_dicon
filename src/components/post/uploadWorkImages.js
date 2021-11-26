import React, {useState} from "react";
import storage from "../firebase/firebase-manager";
// import GetWorkImages from "./getWorkImages";

export default function UploadWorkImages(props) {
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const [clicked, setClicked] = useState(false);
    // const [directory, setDirectory] = useState("");
    const directory = props.directory;
    const teamName = props.teamName;
    
    const handleChange = (e) => {
        if (images.length != 0) {
            console.log('a')
            setImages([])
        };
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
        setClicked(true);
        const promises = []
        images.map((image) => {
            const uploadTask = storage.ref(`images/${teamName}/${directory}/works/${image.name}`).put(image);
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
                        .ref(`images/${teamName}/${directory}/works/`)
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                            // console.log(urls)
                        })
                }
            );
        });

        Promise.all(promises)
            // .then(() => { })
            .catch((err)=> console.log(err))
    };
    // const initializeInput = () => {
    //     console.log('a')
    //     setImages([]);
    // }

    // console.log("image : ", images);
    // console.log("urls : ", urls);

    const sendText = async () => {
        // handleUpload()
        await props.getWorksUrl(urls);
        await console.log('Works : ',urls)
    }
    // console.log(urls)
    // console.log(teamName)
    // console.log(directory)
    return(
        <>
            <progress value={progress} max="100"/>
            <br/>
            {/*<input onChange={handleChangeDirectory} placeholder="저장 폴더 이름"/>*/}
            <br/>
            <input type="file" multiple onChange={handleChange}/>
            <button onClick={clicked ? null: handleUpload}>Upload</button>
            <button onClick={sendText}>send</button>
            <br/>
            <br/>
            {urls.map((url, i) => (
                <img key={i}
                     src={url || "http://via.placeholde.com/300"}
                     alt="works"
                     style={{height: "50px"}}
                />
            ))}
            <br/>
            {/*<GetWorkImages urls={urls}/>*/}
        </>
    )
}