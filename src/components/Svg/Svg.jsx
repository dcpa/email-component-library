import React from "react";

const KittyKatty = (props) => {
    return (
        <div className="svg-holder">
            <svg width="100" height="100">
                <polygon points="10,15 15,45 45,25" fill="white" />
                <polygon points="15,20 18,40 30,25" fill="pink" />
                <polygon points="10,55 30,79 45,25" fill="white" />
                <ellipse cx="50" cy="50" rx="35" ry="35" fill="white" />
                <polygon points="95,15 80,60 45,25" fill="white" />
                <polygon points="90,20 85,35 75,25" fill="pink" />
                <polygon points="90,55 65,79 62,25" fill="white" />
                <ellipse cx="35" cy="45" rx="3" ry="7" fill="black" />
                <ellipse cx="65" cy="45" rx="3" ry="7" fill="black" />
                <polygon points="45,55 55,55 50,60" fill="pink" />
                <ellipse cx="65" cy="41" rx="2" ry="2" fill="white" />
                <ellipse cx="35" cy="41" rx="2" ry="2" fill="white" />
                <path d="M 40 65 q 5 10 10 0" stroke="black" fill="none" stroke-width="2" />
                <path d="M 50 65 q 5 10 10 0" stroke="black" fill="none" stroke-width="2" />
                <line x1="23" y1="55" x2="35" y2="60" stroke="black" />
                <line x1="23" y1="62" x2="35" y2="63" stroke="black" />
                <line x1="63" y1="60" x2="75" y2="55" stroke="black" />
                <line x1="63" y1="63" x2="75" y2="62" stroke="black" />
            </svg>
        </div>
    )
}

export default KittyKatty;