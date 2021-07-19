import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoginComponent from './login/LoginComponent';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.login} component={LoginComponent} />
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;
