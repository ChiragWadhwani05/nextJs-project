'use client';
import React from 'react';
import './contactUs.scss';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import Image from 'next/image';
function page() {
  return (
    <motion.div className="contact-us-container">
      <div className="left">
        <h1>Get in touch</h1>
        <p>
          Discover Your Ideal Remote Workspace with Best Remote Location Work
        </p>

        <br />
        <h3>Connect with us on Social Media </h3>

        <div className="social-icons">
          <FaLinkedin />
          <RiInstagramFill />
          <FaFacebook />
          <FaSquareXTwitter />
        </div>
      </div>
      <div className="right">
        <form action="">
          <div className="input-group">
            <label htmlFor="First Name">
              First Name*
              <input type="text" />
            </label>
            <label htmlFor="Last Name">
              Last Name
              <input type="text" />
            </label>
          </div>
          <label htmlFor="Email">
            Email*
            <input type="email" />
          </label>
          <label htmlFor="Message">
            Message
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </label>

          <button type="submit" className="custom-button-1">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default page;
