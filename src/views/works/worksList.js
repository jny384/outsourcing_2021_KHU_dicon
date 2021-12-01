import React, {useEffect, useState} from "react";
import GetThumbNail from "../../components/firebase/getThumbNail";
import './worksList.css'

export default function WorksList({match}) {
    const [inputData, setInputData] = useState([]);
    useEffect(() => {
        initial();
        console.log('iP : ',inputData);
    }, [])


    async function initial(){
        // await console.log(match.params.teamName);
        console.log('data : ');
        const data =  await GetThumbNail(match.params.teamName);
        await setInputData(data);
    }

    const getTitle = () => {
        if (match.params.teamName === 'VFX_SFX') {
            return 'VFX / SFX'
        }

        if (match.params.teamName === 'InteractionDesign') {
            return 'UI / UX'
        }

        if (match.params.teamName === 'WebtoonConceptArt') {
            return 'Webtoon / Concept Art'
        }
        if (match.params.teamName === '2D') {
            return '2D'
        }

        if (match.params.teamName === '3D') {
            return '3D'
        }

        if (match.params.teamName === 'Game') {
            return 'Game'
        }
    }
    // const thumbUrl = inputData.thumbUrl;

    return(
        <>
            <section className="workListMain">
                <span className="list_title">{getTitle()}</span>
                <div className="list_main">
                    {
                        inputData.map((item, index) => {
                            return(
                                <div key={index} className="thumb_list">
                                    <div >
                                        <a href={item.url}>
                                            <img
                                                src={item.thumbUrl}
                                                alt="thumbNail"
                                                className="thumbNail"
                                            />
                                        </a>
                                    </div>
                                    <div className="thumb_under">
                                        <a href={item.url} className="thumb_title">{item.title}</a>
                                        <a href={item.url} className="thumb_name">{item.name}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <div className="footer">
                <p id="footer_text" >KyungHee Univ. Dicon 2021 Degree Show </p>
            </div>
        </>
    )
}

const style = {
    component : {
        display: 'grid',

        gridColumnGap: '23px',
        gridRowGap: '50px',
        textAlign:'center',
        color:'white'
    },
    thumb:{
        width:'330px',
        height:'440px'
    },
    title:{
        fontsize: '24px',
        textDecoration:'none'

    },
    name:{
        fontsize: '18px',
        textDecoration:'none'
    }
}