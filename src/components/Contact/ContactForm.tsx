/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useState } from 'react';
import './contact-form.scss';
import images from '@/assets/images';
import { Toaster, toast } from 'react-hot-toast';

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch(
      `${process.env.baseUrl}contact/create-message/api`,
      {
        method: 'POST',
        body: data,
      }
    );

    res.ok &&
      toast.success(
        "Your message was sent successfully. We'll get in touch soon."
      );
  };

  return (
    <div id="contact-form" onSubmit={handleChange}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ fontSize: '16px', fontWeight: 'bold' }}
      />
      <div className="uk-section">
        <div className="uk-container">
          <div className="" uk-grid>
            <div className="uk-inline">
              <div className="uk-width-1-1@m contact-form">
                <div className="form-container">
                  <form name="contact_form">
                    <div className="uk-margin">
                      <input
                        className="uk-input form-input uk-form-width-large"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="uk-margin">
                      <input
                        className="uk-input form-input"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="uk-margin">
                      <input
                        className="uk-input form-input"
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div className="uk-margin">
                      <textarea
                        rows={5}
                        className="form-input"
                        name="message"
                        placeholder="Tell us about your interest"
                        required
                      ></textarea>
                    </div>

                    <div className="text-container">
                      <button className="submit-btn">
                        <img src={images.bottomArrow.src} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="uk-width-1-3@m portfolio-contact-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
