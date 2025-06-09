import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

function Footer() {
    return (
        <AntFooter style={{ textAlign: 'center' }}>
            © 2025 Половнєва Альона. Всі права захищені.
        </AntFooter>
    );
}

export default Footer;
