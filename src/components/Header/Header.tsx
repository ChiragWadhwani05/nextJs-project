'use client';

import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import './header.scss';
import Link from 'next/link';
import Login from '@/components/Modals/Login';
import {
  useAppDispatch,
  useAppSelector,
} from '@/redux_toolkit/redux_store/hooks';
import { toggleRegistrationModal } from '@/redux_toolkit/reducers/modalReducer';

function Header() {
  const dispatch = useAppDispatch();

  const handleLoginButton = () => {
    dispatch(toggleRegistrationModal());

    console.log('login button clicked');
  };
  return (
    <>
      <header className="header-container">
        <div className="header-title">
          <FaCoffee />
          <h1>CafeHub</h1>
        </div>
        <ul className="header-links">
          <li>
            <Link href="/my-map">My Map</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        <div className="header-buttons">
          <button onClick={handleLoginButton}>Log In</button>
        </div>
      </header>
      <Login />
    </>
  );
}

export default Header;
