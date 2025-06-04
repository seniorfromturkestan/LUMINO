import React from 'react';
import Layout from './components/layouts/Layout';
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <Layout>
            <AppRouter />
        </Layout>
    );
};

export default App;