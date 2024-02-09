'use client';

import { motion } from 'framer-motion';
export default function Home() {
  return (
    <main>
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
        className="hero-section"
      >
        <div className="content">
          <h1>
            Search for co-working friendly or collaborative workspaces in the
            vicinity.
          </h1>
          <p>
            Explore cafes nearby with excellent WiFi, spacious tables, charging
            facilities, ample lighting, and find popular workspaces recommended
            by friends.
          </p>

          <button>Start Exploring Now</button>
        </div>
      </motion.div>
    </main>
  );
}
