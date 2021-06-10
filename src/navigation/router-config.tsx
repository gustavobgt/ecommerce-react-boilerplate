import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'navigation/not-found';
import { PATHS } from 'navigation/router.paths';

const Home = lazy(() => import('modules/common/screens/Home'));
const Shop = lazy(() => import('modules/common/screens/Shop'));

export const RouterConfig: React.FC = () => (
    <Switch>
        <Route exact path={PATHS.HOME} component={Home} />
        <Route exact path={PATHS.SHOP} component={Shop} />

        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
