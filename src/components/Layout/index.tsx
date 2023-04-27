import React, { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation';
import { Inter } from "next/font/google";

type Layout = {
    children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: Layout) => {
    return (
        <div className={`${inter.className} grid`}>
            <Navigation />
            {children}
        </div>
    );
};

export default Layout