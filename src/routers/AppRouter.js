import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginPage } from '../components/login/LoginPage';

import { DashRoutes } from './DashRoutes';

export const AppRouter = () => {
    return (
        <Router>


            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route path="/" component={DashRoutes} />
            </Switch>
        </Router>
    )
}
