import React, {useEffect, useState} from "react";
import GetThumbNail from "../../components/firebase/getThumbNail";


export default function WorksList({match}) {
    const [inputData, setInputData] = useState([]);
    useEffect(() => {
        exec();
        console.log('iP : ',inputData);
    }, [])

    async function exec(){
        const data =  await GetThumbNail(match.params.teamName);
        await setInputData(data);
    }

    // const thumbUrl = inputData.thumbUrl;

    return(
        <>
            <section>
                <div>
                    {
                        inputData.map((item, index) => {
                            return(
                                <div key={index} style={style.component}>
                                    <div className="thumbNail">
                                        <a href={item.url}>
                                            <img
                                                src={item.thumbUrl}
                                                alt="thumbNail"
                                                style={style.thumb}
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href={item.url} style={style.title}>{item.title}</a>
                                        <a href={item.url} style={style.name}>{item.name}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
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