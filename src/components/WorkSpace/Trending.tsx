'use client';

import Image from 'next/image';
import './workspace.scss';
import { motion } from 'framer-motion';
import { BsPinAngle } from 'react-icons/bs';
import { IoMdStar } from 'react-icons/io';
import { IoMdStarHalf } from 'react-icons/io';

import Link from 'next/link';
function Trending() {
  const workspaces = [
    {
      id: 1,
      name: 'Workspace Name',
      description: 'Workspace Description',
      features: ['Cafe', 'Free-WiFi', 'Charging'],
      mainImage: '/workspace01.jpg',
      ratings: 12,
      stars: 3.5,
    },
    {
      id: 1,
      name: 'Workspace Name',
      description: 'Workspace Description',
      features: ['Cafe', 'Free-WiFi', 'Charging'],
      mainImage: '/workspace02.jpg',
      ratings: 12,
      stars: 3.5,
    },
    {
      id: 1,
      name: 'Workspace Name',
      description: 'Workspace Description',
      features: ['Cafe', 'Free-WiFi', 'Charging'],
      mainImage: '/workspace03.jpg',
      ratings: 12,
      stars: 3.5,
    },
    {
      id: 1,
      name: 'Workspace Name',
      description: 'Workspace Description',
      features: ['Cafe', 'Free-WiFi', 'Charging'],
      mainImage: '/workspace04.jpg',
      ratings: 12,
      stars: 3.5,
    },
  ];
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
      <div className="heading">
        <h2>Triending Workspaces</h2>
        <p>See All</p>
      </div>
      <div className="container">
        {workspaces.map((workspace) => (
          <div className="workspace-card" key={workspace.id}>
            <div className="img-container">
              <Image
                src={workspace.mainImage}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="info">
              <div className="title">
                <h3>{workspace.name}</h3>
                <BsPinAngle />
              </div>
              {/* <p>{workspace.description}</p> */}
              <p>
                {workspace.stars}
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </p>
              <div className="tags">
                {workspace.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* <div className="workspace-card">
              <div className="img-container">
                <Image src="/workspace01.jpg" alt="" width={1000} height={1000} />
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
                </div>
              </div>
            </div> */}
      </div>
    </motion.section>
  );
}

export default Trending;
