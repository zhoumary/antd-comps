import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';

import './Welcome.css';
import MenuLayout from '../layouts/Menu';
import SAPLogo from '../assets/sap.svg';



const Welcome = () => {
    return (
        <Router>
            <MenuLayout>
                <div className="welcome">
                    <img src={SAPLogo} className="welcomeLogo" />
                    <span className="systemTitle">Welcome S+ POC</span>
                </div>

            </MenuLayout>

        </Router>
    )
}

export default Welcome;