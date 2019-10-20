import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

const Layout = props => {
    const brand = 'React blog!';

    const isActive = href => {
        return window.location.pathname === href;
    }

    return (
        <>
            <Menu brand={brand}>
                <MenuItem href="/" active={isActive('/')}>
                    Главная
                </MenuItem>
                <MenuItem href="/users" active={isActive('/users')}>
                    Пользователи
                </MenuItem>
                <MenuItem href="/posts" active={isActive('/posts')}>
                    Посты
                </MenuItem>
                <MenuItem href="/comments" active={isActive('/comments')}>
                    Комментарии
                </MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                &copy; 2019
            </footer>
        </>
    );
}
export default Layout;
