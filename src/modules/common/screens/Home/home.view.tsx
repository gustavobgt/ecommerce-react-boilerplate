import React from 'react';
import { TestComponent } from './components/test.component';

const HomeView: React.FC = () => {
    return (
        <div>
            <h1>HomeView</h1>
            <TestComponent />
        </div>
    );
};

export default HomeView;
