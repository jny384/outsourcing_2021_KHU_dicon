import React, {useEffect, useState} from "react";
import PostGuestBook from "../../components/firebase/postGuestBook";
import GetGuestBook from "../../components/firebase/getGuestBook";

export default function GuestBook() {
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const onWriterChange = (e) => {
        setWriter(e.target.value);
    };

    const onContentChange = (e) => {
        setContent(e.target.value);
    };

    const postGusetBookContent = async () => {
        await PostGuestBook(writer, content)
    };

    useEffect(()=> {
        const guestBook = GetGuestBook;
    }, [])

    return (
        <>
            <div style={style.guest_input} className="guest_input">
                <input name="writer" style={style.guest_name} placeholder="이름" value="writer" onChange={onWriterChange}/>
                <input name="content" style={style.guest_book} placeholder="내용 작성란입니다. 비방, 욕설, 광고 글 작성 시 삭제될 수 있습니다." value="content" onChange={onContentChange}/>
                <button onclick={postGusetBookContent()}>등록</button>
            </div>
        </>
    )
}

const style = {
    guest_input : {
        width : '330px',
        height : '330px',
        display: 'flex',
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    guest_name : {
        width: '290px',
        height: '40px'
    },
    guest_book : {
        width : '290px',
        height : '200px'
    }
}