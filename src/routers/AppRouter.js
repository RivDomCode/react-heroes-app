import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { LoginPage } from '../components/login/LoginPage';

import { DashRoutes } from './DashRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>


            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<DashRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
