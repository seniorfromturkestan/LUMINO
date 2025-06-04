import React from 'react';
import Header from '../layouts/Header';

const Layout = ({ children }) => {
    const currentPath = window.location.pathname;
    const authPaths = ['/login', '/registration'];
    const isAuthPath = authPaths.some((path) =>
        currentPath.startsWith(path)
    );
    
    if (isAuthPath) {
        return children;
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className="flex-1">{children}</main>
        </div>
    );
};

export default Layout;