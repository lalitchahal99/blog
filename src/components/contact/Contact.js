import React, { useContext, useEffect } from "react";
import { ContactBtn } from "../Context";
import Form from "./Form";
import bg_anim2 from '../../media/Animation/bg_animation2.svg';


const Contact = () => {
    const [contact, setContact] = useContext(ContactBtn);
    useEffect(() => {
        if(contact === true) {
            document.querySelector('.contact').classList.remove('contactTranslateRight');
        }
        if(contact === false) {
            document.querySelector('.contact').classList.add('contactTranslateRight');
        }
    } ,[contact])
    return (
        <div className="contact w-100 contactTranslateRight" style={{ height: '94%' }}>
            <div className="w-100 h-100" >
                {/* {bg1} */}
                <img className="h-100 w-100" src={bg_anim2} alt="bg animate" />
            </div>

            <Form />
        </div>
    )
}

export default Contact;