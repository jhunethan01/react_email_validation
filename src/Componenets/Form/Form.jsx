import React, { useEffect, useState } from 'react';
import { useAnimation } from "framer-motion";

import '../../App.css';

import Notification from '../Notification';
import Header from './Header';
import UserInput from './UserInput';

function Form() {
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState('');
    const [notificationControl] = useState(useAnimation());

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setEmail(user);
            setEmailSubmitted(true);
        }
    }, [])

    function submitForm(e) {
        e.preventDefault();
        showSuccessNotification();
        submitEmail();
    }

    function submitEmail() {
        setEmailSubmitted(true);
        localStorage.setItem('user', email);
    }

    function showSuccessNotification() {
        notificationControl.start({
            opacity: 1,
            y: 0,
            x: 0,
        })
        setTimeout(() => {
            notificationControl.start({
                opacity: 0,
            });
        }, 3000);
    }

    return (
        <form className='App-form' onSubmit={submitForm}>
            <Notification animate={notificationControl} />
            <Header />
            <UserInput email={email} setEmail={setEmail} submitForm={submitForm} emailSubmitted={emailSubmitted} />
            <div className='App-form-error'></div>
        </form>
    );
}

export default Form;