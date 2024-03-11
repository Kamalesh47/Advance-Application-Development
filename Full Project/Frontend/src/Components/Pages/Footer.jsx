// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Footer.css'

 const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © ${year} : All Rights Reserved`}</footer>;
};

export default Footer;

