'use client';

import { FaCoffee } from 'react-icons/fa';
import './header.scss';
import Link from 'next/link';

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
        <Link href={'/'} className="header-title">
          <FaCoffee />
          <h1>CafeHub</h1>
        </Link>
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
          <button className="custom-button-1" onClick={handleLoginButton}>
            Log In
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
