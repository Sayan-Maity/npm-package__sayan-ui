import * as React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
};

const Button = ({ children, onClick, className, style }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{backgroundColor: "red", fontSize: "15px", padding: "1rem 2rem", ...style}}
            className=""
        >
            {children}
        </button>
    );
};

export { Button };
