import React from 'react';
import { FaChessQueen } from 'react-icons/fa6';

function Notification() {
    return (
        <div className='App-form-header'>
            <FaChessQueen className='App-form-header-logo' />
            <div className='App-form-header-main'>
                <h1>
                    Welcome to XYZ
                </h1>
                <p>
                    Enter your email and let's get going
                </p>
            </div>
        </div>
    );
}

export default Notification;