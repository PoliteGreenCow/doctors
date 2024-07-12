import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ChatBubble from '../components/ChatBubble'; 
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <ChatBubble /> 
      <Footer />
    </>
  );
};

export default Layout;
