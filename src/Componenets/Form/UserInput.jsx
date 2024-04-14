import React, { useState } from 'react';
import { FaXmark, FaPaperPlane } from 'react-icons/fa6';
import { motion, useAnimation } from "framer-motion";
import * as yup from 'yup';

function UserInput({ email, setEmail, submitForm, emailSubmitted }) {
    const [inputControl] = useState(useAnimation());
    
    function handleEmailInput(e) {
        setEmail(e.target.value);
    }

    function clearFormInput(e) {
        e.preventDefault();
        setEmail('');
    }

    function handleSubmitForm(e) {
        e.preventDefault();

        const schema = yup.object().shape({
            email: yup.string().email('Invalid email format').required('Email is required'),
        });

        schema.validate({ email })
            .then(() => {
                document.querySelector('.App-form-error').innerHTML = '';
                submitForm(e);
            })
            .catch((error) => {
                console.log(error);
                document.querySelector('.App-form-error').innerHTML = error.message;
                inputControl.start({
                    x: [-20, 20, -20, 20, -20, 20, 0],
                })
            });

    }

    return (
        <div className={`${emailSubmitted ? 'disable-cursor-outer' : ''}`}>
            <motion.div
                animate={inputControl}
                transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 10,
                }}
                className='App-form-input'
            >
                <input className={`${emailSubmitted ? 'disable-cursor' : ''}`} type="text" placeholder='Enter email...' value={email} onChange={handleEmailInput} onKeyDown={(e) => { if (e.key === 'Enter') handleSubmitForm(e) }} />
                <div className='App-form-input-buttons'>
                    <button className={`App-form-input-buttons-x ${email ? '' : 'hidden'} ${emailSubmitted ? 'disable-cursor' : ''}`} onClick={clearFormInput}>
                        <FaXmark />
                    </button>
                    <button className={`App-form-input-buttons-submit ${emailSubmitted ? 'disable-cursor' : ''}`} onClick={handleSubmitForm}>
                        <FaPaperPlane />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default UserInput;