import React from 'react';

const Contact = () => {
return (
    <div id="social" class="flex items-center justify-center space-x-4">
        <a href="https://github.com/Enotherms" class="scale-95 hover:scale-105 ease-in-out duration-500">
            <img src={process.env.PUBLIC_URL + '/img/logo/github.png'} className='w-9' alt="" />
        </a>
        <a href="https://www.linkedin.com/in/abiyyu-dhiyaul-haq-333575268/" class="scale-95 hover:scale-105 ease-in-out duration-500">
            <img src={process.env.PUBLIC_URL + '/img/logo/linkedin.png'} className='w-9' alt="" />
        </a>
        <a href="https://www.instagram.com/_biyyu/" class="scale-95 hover:scale-105 ease-in-out duration-500">
            <img src={process.env.PUBLIC_URL + '/img/logo/instagram.png'} className='w-9' alt="" />
        </a>
    </div>

);
}

export default Contact;
