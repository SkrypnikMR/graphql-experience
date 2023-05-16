import React from 'react';
import './style.css';

export default function OopsFace() {
    return (
        <svg className="face-svg" width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="none" stroke-width="10" />
            <circle cx="70" cy="80" r="10" fill="none" stroke-width="10" />
            <circle cx="130" cy="80" r="10" fill="none" stroke-width="10" />
            <line x1="70" y1="130" x2="130" y2="130" stroke-width="10" />
        </svg>
    );
}
