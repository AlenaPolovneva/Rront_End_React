import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router';

const { Header: AntHeader } = Layout;

function Header() {
    const location = useLocation();

    return (
        <AntHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[location.pathname]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="/">
                    <Link to="/">Головна</Link>
                </Menu.Item>
                <Menu.Item key="/contacts">
                    <Link to="/contacts">Контакти</Link>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Link to="/about">Про мене</Link>
                </Menu.Item>
            </Menu>
        </AntHeader>
    );
}

export default Header;