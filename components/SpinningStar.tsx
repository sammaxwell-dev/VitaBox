import React from 'react';

const SpinningStar: React.FC<{ className?: string }> = ({ className = '' }) => (
    <span className={`inline-block animate-spin-slow ${className}`}>✻</span>
);

export default SpinningStar;
