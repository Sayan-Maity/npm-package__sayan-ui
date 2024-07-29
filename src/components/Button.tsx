import * as React from 'react'
import { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
            {children}
        </button>
    )
}

export { Button }
