import React from 'react';

import './Tab.css';

export default function Tab({ index, label, active, onClick }) {
    return (
        <div className={`tab${active ? ' tab--active': ''}`} onClick={() => onClick(index)}>{label}</div>
    );
};