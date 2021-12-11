import React, { useEffect } from "react";

const Title = () => {
    useEffect(() => {
        var childNodes = document.querySelector('.title').childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].classList.add('loadAnimate');
        }
    }, [])
    return (
        <>
            <div className="title">
                <h1 className="title__text js-letter" >LALIT<br />CHAHAL</h1>
                <div className="border1 js-letter" ><span></span><span className="js-letter" ></span></div>
                <p className="title__lead js-letter" >Software Developer /<br />DevOps Engineer</p>
            </div>
        </>
    )
}

export default Title;