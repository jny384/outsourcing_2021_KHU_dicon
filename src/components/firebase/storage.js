// import firebase from "./firebase-manager";
import {firebase} from "./firebase-manager";
import storage from "./firebase-manager";
var storageRef = firebase.storage().ref();

// File or Blob named mountains.jpg
// var file = ...

// Create the file metadata
var metadata = {
    contentType: 'image/jpeg'
};

// UploadWorkImages file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('UploadWorkImages is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('UploadWorkImages is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('UploadWorkImages is running');
                break;
        }
    }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
        }
    }, function() {
        // UploadWorkImages completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
        });
    });






// var express = require('express');
// var router = express.Router();
//
// const admin = require('firebase-admin');
// const dataFormat = require('dataformat');
// const multer = require('multer');
// const stream = require('stream');
//
// const firebasAdmin = admin.initializeApp({
//     credential: admin.credential.cert({
//
//     }),
// }, "storage");
//
// var upload = multer({storage: multer.memoryStorage()});
//
// router.get('/uplaod', function (req, res, next) {
//     res.render('storage/upload');
//     return;
// });
//
// router.post('/photo', upload.single('photo'), function (req, res, next){
//     var image = req.file;
//     var bufferStream = new stream.PassThrough();
//     bufferStream.end(new Buffer.from(image.buffer, 'ascii'));
//
//     var fileName = image.originalname;
//     let file = firebasAdmin.storage().bucket().file(fileName);
//
//     bufferStream.pipe(file.createWriteStream({
//         metadata : {
//             contentType : image.mimetype
//         }
//     })).on('error', (err) => {
//         console.log(err);
//     }).on('finish', ()=> {
//         console.log(fileName + "finish");
//
//         res.redirect('download?imgName=' + image.originalname);
//         return;
//     });
// });
//
// router.get('download', function (req, res, next) {
//     var imgName = req.query.imgName;
//
//     var file = firebasAdmin.storage().bucket().file(imgName);
//     const config = {
//         action : "read",
//         expires : '01-17-2030'
//     };
//
//     file.getSignedUrl(config, (err, url) => {
//         if (err) {
//             console.log(err);
//         }
//
//         console.log(url);
//
//         res.render('storage/download', {image : url});
//         return;
//     });
// });
//
// module.exports = router;