import React from 'react';
import { motion } from "framer-motion";
import { FaHandPeace } from 'react-icons/fa6';

import '../App.css';

function Notification({ animate }) {
    return (
    <motion.div initial={{ opacity: 0, x: -25, y: -25 }} animate={animate} transition={{
            stiffness: 600,
            damping: 10,
        }} className='App-notification'>
            <FaHandPeace className='App-notification-icon' /> Nice to meet you
        </motion.div>
    );
}

export default Notification;