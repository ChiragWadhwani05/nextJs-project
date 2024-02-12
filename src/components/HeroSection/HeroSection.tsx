'use client';

import { motion } from 'framer-motion';
import './heroSection.scss';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';

function HeroSection() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
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
      className="hero-section-container"
    >
      <div className="content">
        <h1>
          Search for co-working friendly or collaborative workspaces nearby
        </h1>
        <p>
          Explore nearby spots with excellent WiFi, spacious tables, charging
          facilities, and ample lighting. Discover popular workspaces
          recommended by friends.
        </p>
        <div className="buttons-group">
          <button className="custom-button-1">Start Exploring</button>
          <button className="custom-button-3">
            Watch Demo
            <FaRegCirclePlay />
          </button>
        </div>
      </div>
      <div className="images">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -10,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="main-image"
        >
          <Image
            width={1000}
            height={1000}
            src="/hero-section-image.jpg"
            alt="Hero Section Image"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 500,
              y: 400,
              position: 'absolute',
            },
            visible: {
              opacity: 1,
              y: 400,
              x: 150,
              position: 'absolute',
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="image2"
        >
          <Image
            width={500}
            height={300}
            src="/dummy-map.png"
            alt="Map Image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
