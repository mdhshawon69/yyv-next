import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import yyvLogoWhite from '../../../assets/logo/yyv-logo-white.svg';
import leaf from '../../../assets/images/leaf_final.png';

import style from './footer.module.scss';

const {
  footer,
  aboutContainer,
  logoContainer,
  logo,
  text,
  getInTouchContainer,
  heading,
  list,
  item,
  link,
  email,
  phone,
  address,
  mediaContainer,
  copyrightContainer,
  copyright,
  mainContainerFooter,
  leafContainer,
} = style;

const Footer = () => {
  return (
    <div className={mainContainerFooter}>
      <div className={leafContainer}>
        <img className="leaf" src={leaf.src} alt="" />
      </div>
      <div className={footer}>
        <div className={aboutContainer}>
          <div className={logoContainer}>
            <Image
              className={logo}
              src={yyvLogoWhite}
              alt="yyv logo"
              priority
            />
          </div>
          <h3 className={text}>
            YY Ventures is an incubation and investment Social Business that
            supports early-stage entrepreneurs who are fighting carbon emission,
            poverty, and unemployment.
          </h3>
        </div>
        <div className={getInTouchContainer}>
          <h5 className={heading}>Get in Touch</h5>
          <ul className={list}>
            <Link href={'/contact'} className={link}>
              <li className={item}>Contact</li>
            </Link>
            <Link href={'/media-kit'} className={link}>
              <li className={item}>Media Kit</li>
            </Link>
            <Link href={'/news-views-more'} className={link}>
              <li className={item}>News, Views & More</li>
            </Link>
          </ul>
          <p className={email}>E: info@yy.ventures</p>
          <p className={phone}>M: +880 1810061591</p>
          <p className={address}>
            9th floor, Grameen Telecom Bhaban,
            <br />
            Mirpur 1, Dhaka 1216, Bangladesh.
          </p>
        </div>
        <div className={mediaContainer}>
          <h5 className={heading}>Follow YY Ventures</h5>
          <ul className={list}>
            <Link href="https://www.facebook.com/yyventures" className={link}>
              <li className={item}>Facebook</li>
            </Link>
            <Link
              href="https://www.instagram.com/yy.ventures/"
              className={link}
            >
              <li className={item}>Instagram</li>
            </Link>
            <Link
              href="https://bd.linkedin.com/company/yyventures"
              className={link}
            >
              <li className={item}>LinkedIn</li>
            </Link>
            <Link href="https://vimeo.com/yyventures" className={link}>
              <li className={item}>Vimeo</li>
            </Link>
          </ul>
        </div>
        <div className={copyrightContainer}>
          <p className={copyright}>
            © 2023 · YY Ventures Limited · All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
