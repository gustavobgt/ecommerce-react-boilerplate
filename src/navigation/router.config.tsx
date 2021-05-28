import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'navigation/not-found';
import { HOME } from 'navigation/constants';

const Home = lazy(() => import('modules/common/screens/Home'));

const RouterConfig: React.FC = () => (
    <Switch>
        <Route exact path={HOME} component={Home} />

        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);

export default RouterConfig;
