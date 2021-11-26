import React, {useEffect, useState} from "react";
import PostGuestBook from "../../components/firebase/postGuestBook";
import GetGuestBook from "../../components/firebase/getGuestBook";
import './guestBook.css';

export default function GuestBook() {
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [inputData, setInputData] = useState([]);

    const [length, setLength] = useState(0)
    const [check, setCheck] = useState(true);

    // const [clicked, setClicked] = useState(false);
    useEffect(() => {
        exec();
        // console.log('guestInput : ',inputData);
    }, [])

    async function exec(){
        const data =  await GetGuestBook();
        // console.log(data.reverse());
        await setInputData(data);
    }

    const onWriterChange = (e) => {
        let today = new Date();

        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜

        setDate(month + '-' + date);
        setWriter(e.target.value);
    };

    const onContentChange = (e) => {
        if (e.target.value.length === 0) {
            setCheck(false);
        }
        if (e.target.value.length > 440) {
            setCheck(false);
        } else {
            setCheck(true);
        }
        setLength(e.target.value.length)
        setContent(e.target.value);
    };
    const onPost = async () => {
        if (check === true) {
            await PostGuestBook(writer, date, content);
            await window.location.reload();
        }
        // console.log(url);
    };

    return (
        <>
            <div className="guestBook_main">
                <span className="guestBook_title"> Guest_Book </span>
                <div className="guest_list">
                    <div className="list_box">
                        <div className="input_box">
                            <div className="input_top">
                                <input className="input_name" placeholder="이름" onChange={onWriterChange}/>
                                {/*<input className="input_date" placeholder="날짜" onChange={onDateChange}/>*/}
                            </div>
                            <div>
                                <textarea className="input_content" name="guest_content" placeholder="내용 작성란입니다.&#13;&#10;비방, 욕설, 광고글 작성 시 삭제될 수 있으며,&#13;&#10;한 번 작성된 글은 수정할 수 없습니다." onChange={onContentChange}/>

                            </div>
                            <div className="input_bottom">
                                <div className="check_length">

                                    <span > {length}/440</span>
                                </div>
                                <button className={check ? "input_btn" : "unactive_btn"} onClick={onPost}>등록</button>
                            </div>
                        </div>
                    </div>
                    {
                        inputData.map((item, index) => {
                            if (inputData.length > 0) {
                                return (
                                    // <li className="grid_list">
                                    <div className="list_box">
                                        <div className="guest_box">
                                            <div className="guest_top">
                                                <span className="guest_name">{item.writer}</span>
                                                <span className="guest_date">{item.date}</span>
                                            </div>
                                            <div className="guest_content">
                                                <span> {item.content} </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="footer_book">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
    )
}

const style = {
    main : {
        width: '100vw',
        overflow: 'auto',
        height: 'auto',
        display: 'grid',
        // flexDirection: 'row',
        gridColumnGap: '23px',
        gridRowGap: '50px',
        gridTemplateColumns : 'repeat(2, 1fr)',
        minHeight: '100vh'

    },
    guest_input : {
        width : '330px',
        height : '330px',
        display: 'flex',
        backgroundColor: '#C4C4C4',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    guest_name : {
        width: '290px',
        height: '30px'
    },
    guest_book : {
        width : '290px',
        height : '200px'
    },
    content: {
        width: '330px',
        height: '330px',
        fontsize: '18px',
        backgroundColor: '#C4C4C4',
        margin: '20px',
        textAlign: 'center',
        display: 'grid',
        gridRowGap: '50px',
        gridTemplateColumns : 'repeat(2, 1fr)',

    },
    outerBox: {
        display: 'flex',
        flexDirection: 'row',
    }
}