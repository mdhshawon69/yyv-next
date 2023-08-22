'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

import yyvLogo from '../../../assets/logo/yyv-logo.svg';

import style from './navbar.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const {
  navbar,
  list,
  item,
  link,
  logo,
  logoContainer,
  menuBtn,
  bar,
  active,
  listActive,
} = style;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleToggle = () => {
    setActiveMenu(!activeMenu);
  };

  const [positionOld, setPositionOld] = useState<number>(0);
  const [navHidden, setNavHidden] = useState<boolean>(false);

  const toggleNavigationOnScroll = useCallback(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > positionOld) {
        if (!navHidden) {
          // Update state to hide the navigation menu
          if (navbarRef.current) {
            navbarRef.current.style.transform = 'translateY(-100%)';
          }
          setNavHidden(true);
        }
      } else if (navHidden) {
        // Update state to show the navigation menu
        if (navbarRef.current) {
          navbarRef.current.style.transform = 'translateY(0)';
        }
        setNavHidden(false);
      }
      // Update the positionOld state with the current scroll position
      setPositionOld(window.scrollY);
    });
  }, [positionOld, navHidden]);

  useEffect(() => {
    toggleNavigationOnScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleNavigationOnScroll);
    };
  }, [toggleNavigationOnScroll]);

  return (
    <div className={navbar} ref={navbarRef}>
      <Link href={'#'} onClick={() => setActiveMenu(false)}>
        <div className={logoContainer}>
          <Image className={logo} src={yyvLogo} alt="YYV logo" priority />
        </div>
      </Link>
      <button
        className={activeMenu ? `${menuBtn} ${active}` : `${menuBtn}`}
        onClick={handleToggle}
      >
        <span className={bar}></span>
      </button>
      <ul className={activeMenu ? `${list} ${listActive}` : `${list}`}>
        <Link
          href={'/about'}
          className={item}
          onClick={() => setActiveMenu(false)}
        >
          <li
            style={{
              color: pathname.includes('/about') ? ' #c7265b' : '',
            }}
            className={link}
          >
            About
          </li>
        </Link>
        <Link
          href={'/programs'}
          className={item}
          onClick={() => setActiveMenu(false)}
        >
          <li
            style={{
              color: pathname.includes('/programs') ? ' #c7265b' : '',
            }}
            className={link}
          >
            Programs
          </li>
        </Link>
        <Link
          href={'portfolio'}
          className={item}
          onClick={() => setActiveMenu(false)}
        >
          <li
            style={{
              color: pathname.includes('/portfolio') ? ' #c7265b' : '',
            }}
            className={link}
          >
            Portfolio
          </li>
        </Link>
        <Link
          href={'advisory-services'}
          className={item}
          onClick={() => setActiveMenu(false)}
        >
          <li
            style={{
              color: pathname.includes('/advisory-services') ? ' #c7265b' : '',
            }}
            className={link}
          >
            Advisory Services
          </li>
        </Link>
        <Link
          href={'talents'}
          className={item}
          onClick={() => setActiveMenu(false)}
        >
          <li
            style={{
              color: pathname.includes('/talents') ? ' #c7265b' : '',
            }}
            className={link}
          >
            Talents
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
