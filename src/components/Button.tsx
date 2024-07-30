import * as React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';

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
            // className={classNames('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', className)}
        >
            {children}
        </button>
    );
};

export { Button };
