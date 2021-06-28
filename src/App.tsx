import React from 'react';
import AppIndex from './routes/app/AppIndex';
import { Router } from '@reach/router';
import Home from './routes/app/Home';

const App = () => {
    return (
        <Router>
            <AppIndex path="/">
                <Home default path="/" />
            </AppIndex>
        </Router>
    );
};

export default App;
