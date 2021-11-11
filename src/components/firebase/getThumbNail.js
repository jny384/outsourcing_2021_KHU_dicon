import {firebase} from "./firebase-manager";
import ShowThumbNail from "../works/showThumbNail";
import WorksList from "../../views/works/worksList";

const db = firebase.firestore();
// 이거 콜렉션 안에 도큐먼트 존재할 때, 첨부터 끝까지 리턴함
export default async function GetThumbNail(team) {
    const thumbRef = db.collection('admin').doc('thumbNail').collection(`${team}`);
    // const thumbUrl = [];
    // const url = [];
    // const title = [];
    // const name = [];
    const thumbs = []

    const snapshot = await thumbRef.get();
    snapshot.forEach(doc=> {
        thumbs.push(doc.data());
        // thumbUrl.push(doc.data().thumbUrl);
        // url.push(`/works/${team}/${doc.id}`);
        // title.push(doc.data().title);
        // name.push(doc.data().name);
        // return <ShowThumbNail url={`/works/${team}/${doc.id}`} thumbUrl={doc.data().thumbUrl} title={doc.data().title} name={doc.data().name}/>
    })
    console.log('thumb : ',thumbs)
    return thumbs;
}