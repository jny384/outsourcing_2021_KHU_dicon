import {firebase} from "./firebase-manager";
import moment from "moment";
import 'moment/locale/ko'

const db = firebase.firestore();

export default async function PostGuestBook(writer, date, content) {
    const nowTime = moment().format('YYYY-MM-DD-HH-mm-ss');
    await db.collection('guestBook').doc(`${nowTime}`).set({
        writer: writer,
        date: date,
        content: content
    })
}