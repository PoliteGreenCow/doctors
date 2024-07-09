import React from 'react';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Doctors from './pages/Doctors/Doctors';
import DoctorsDetails from './pages/Doctors/DoctorsDetails';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <Home /></Layout>} />
        <Route path="/home" element={<Layout> <Home /></Layout>} />
        <Route path="/doctors" element={<Layout> <Doctors /></Layout>} />
        <Route path="/doctors/:id" element={<Layout><DoctorsDetails /> </Layout>} />
        <Route path="/login" element={<Layout> <Login /></Layout>}  />
        <Route path="/register" element={<Layout> <Signup /> </Layout>} />
        <Route path="/contact" element={<Layout> <Contact /> </Layout>} />
        <Route path="/services" element={ <Layout> <Services /> </Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
