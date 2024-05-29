import React from 'react';
import './styles/index.scss';
import { MainTable } from '../pages/mainTable';
import { AppRouter } from './providers/router';

const App = () => {

    return (
        <div className={`app g-root g-root_theme_dark`}>
            <MainTable />
            <AppRouter/>
        </div>
    );
};

export default App;