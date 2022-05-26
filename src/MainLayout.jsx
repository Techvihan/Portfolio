import React from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';

function MainLayout() {
    return (
        <div className="flex items-stretch">
            <TopBar />
            <div className="px-12 py-24 grow">
                <Outlet />
            </div>
        </div>
    );
}
export default MainLayout