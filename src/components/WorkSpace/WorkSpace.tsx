'use client';

import React from 'react';
import Image from 'next/image';
import './workspace.scss';
import { motion } from 'framer-motion';
import { BsPinAngle } from 'react-icons/bs';
import Link from 'next/link';

function WorkSpace() {
  return (
    <motion.section
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
      className="home-workspaces"
    >
      <h2>Newly Added Workspaces</h2>
      <div className="container">
        <div className="workspace-card">
          <div className="img-container">
            <Image
              src="/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="info">
            <div className="title">
              <h3>Workspace Name</h3>
              <BsPinAngle />
            </div>
            <p>Workspace Description</p>
            <div className="tags">
              <span>Cafe</span>
              <span>Free-WiFi</span>
              <span>Personal Cabin</span>
              <span>Peace</span>
              <span>Peoples</span>
            </div>
          </div>
        </div>
        <div className="workspace-card">
          <div className="img-container">
            <Image
              src="/tony-lee-8IKf54pc3qk-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="info">
            <div className="title">
              <h3>Workspace Name</h3>
              <span title="Pin to My Map">
                <BsPinAngle />
              </span>
            </div>
            <p>Workspace Description</p>
            <div className="tags">
              <span>Personal Cabin</span>
              <span>Free-WiFi</span>
              <span>Cafe</span>
              <span>Peace</span>
              <span>Peoples</span>
            </div>
          </div>
        </div>
        <div className="workspace-card">
          <div className="img-container">
            <Image
              src="/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="info">
            <div className="title">
              <h3>Workspace Name</h3>
              <BsPinAngle />
            </div>
            <p>Workspace Description</p>
            <div className="tags">
              <span>Cafe</span>
              <span>Free-WiFi</span>
              <span>Personal Cabin</span>
              <span>Peace</span>
              <span>Peoples</span>
            </div>
          </div>
        </div>
        <div className="workspace-card">
          <div className="img-container">
            <Image
              src="/tony-lee-8IKf54pc3qk-unsplash.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="info">
            <div className="title">
              <h3>Workspace Name</h3>
              <span title="Pin to My Map">
                <BsPinAngle />
              </span>
            </div>
            <p>Workspace Description</p>
            <div className="tags">
              <span>Personal Cabin</span>
              <span>Free-WiFi</span>
              <span>Cafe</span>
              <span>Peace</span>
              <span>Peoples</span>
            </div>
          </div>
        </div>
      </div>
      <p>See More</p>
    </motion.section>
  );
}

export default WorkSpace;
