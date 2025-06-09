import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Layout } from 'antd';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';

const { Content } = Layout;

function App() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Header />
                <Content style={{ padding: '20px 50px', marginTop: 64 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Content>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
