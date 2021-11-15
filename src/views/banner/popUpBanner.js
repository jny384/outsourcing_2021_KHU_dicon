import React from "react";

export default function PopUpBanner(props) {
    const data= props.data;
    const index= props.index;
    return(
        <>
            <div>
                <img
                    src={data[index].bannerUrl}
                    alt="Banner pop up"
                />
            </div>
        </>
    )
}