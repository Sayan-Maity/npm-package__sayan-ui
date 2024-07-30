import * as React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={classNames('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', className)}
        >
            {children}
        </button>
    );
};

export { Button };
