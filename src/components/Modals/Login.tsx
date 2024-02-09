'use client';

import React, { useState, useEffect } from 'react';
import './modal.scss';
import './login.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '@/redux_toolkit/redux_store/hooks';
import { toggleRegistrationModal } from '@/redux_toolkit/reducers/modalReducer';
import { motion } from 'framer-motion';
import { IoMdCloseCircle } from 'react-icons/io';

function Login() {
  const [isSignIn, setIsSignIn] = useState(false);
  const dispatch = useAppDispatch();
  const formState = useAppSelector(
    (state) => state.modalReducer.registrationModal
  );

  const handleModalClose = () => {
    dispatch(toggleRegistrationModal());
    setIsSignIn(false);
    console.log('modal closed');
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: +10,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };

  return (
    <div className={formState ? 'modal-container display' : 'modal-container'}>
      <motion.div
        initial="hidden"
        animate={formState ? 'visible' : 'hidden'}
        variants={modalVariants}
        exit="exit"
        className="modal-content"
      >
        <button className="close-button" onClick={handleModalClose}>
          <IoMdCloseCircle />
        </button>
        <div className={`registration-container ${isSignIn ? 'active' : ''}`}>
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons"></div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons"></div>
              <span>or use your email and password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login" onClick={toggleForm}>
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button className="hidden" id="register" onClick={toggleForm}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
