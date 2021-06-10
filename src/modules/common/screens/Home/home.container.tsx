import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'navigation';
import HomeView from './home.view';

export const HomeContainer: React.FC = () => {
    return (
        <>
            <Link to={PATHS.SHOP}>SHOP</Link>
            <HomeView />
        </>
    );
};
