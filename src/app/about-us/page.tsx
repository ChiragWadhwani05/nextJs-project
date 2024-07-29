'use client';
import React from 'react';
import './aboutUs.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
function page() {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="about-us-container"
      >
        <div className="content">
          <h3>
            Discover Your Ideal Remote Workspace with Best Remote Location Work
          </h3>
          <br />
          <p>
            Welcome to Best Remote Location Work, where we are dedicated to
            revolutionizing the way professionals work remotely. Our mission is
            to provide corporate and IT professionals with the ultimate remote
            work environments tailored to their specific needs and preferences.
          </p>
          <br />
          <p>
            Our platform offers a range of features designed to enhance your
            remote work experience. From fast Wi-Fi and accessibility to
            detailed timing information and options for meetings, group work, or
            solo tasks, we have got you covered. Need a quick snack or a
            caffeine fix to keep you going? No problem – our app also provides
            information on meal and snack availability, along with options for
            alcoholic beverages if you prefer.
          </p>
          <br />
          <div className="btns-group">
            <Link href={'/my-map'}>
              <button className="custom-button-1">Start Exploring</button>
            </Link>
            <Link href={'/contact-us'}>
              <button className="custom-button-3">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <div className="image-container">
            <Image
              src="/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="about-us-container"
      >
        <div className="image">
          <div className="image-container">
            <Image
              src="/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="content">
          <h3>
            Enhancing Remote Work Experiences: Get to Know Best Remote Location
            Work
          </h3>
          <br />
          <p>
            Our platform offers a range of features designed to enhance your
            remote work experience. From fast Wi-Fi and accessibility to
            detailed timing information and options for meetings, group work, or
            solo tasks, we have got you covered. Need a quick snack or a
            caffeine fix to keep you going? No problem – our app also provides
            information on meal and snack availability, along with options for
            alcoholic beverages if you prefer.
          </p>
          <br />
          <div className="btns-group">
            <Link href={'/my-map'}>
              <button className="custom-button-1">Start Exploring</button>
            </Link>
            <Link href={'/contact-us'}>
              <button className="custom-button-3">Contact Us</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default page;
