import React from 'react';
import PropTypes from 'prop-types';
import DesktopMenubar from './desktop-menubar';
import MobileMenubar from './mobile-menubar';

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopMenubar>{children}</DesktopMenubar>
        <MobileMenubar>{children}</MobileMenubar>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainer;