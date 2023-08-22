import ContactForm from '@/components/Contact/ContactForm';
import { HeroSection } from '@/shared/components';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <HeroSection mainText="Get in Touch" optionalText="with Us" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
