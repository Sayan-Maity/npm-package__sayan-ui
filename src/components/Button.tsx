import * as React from 'react'
import {ReactNode} from 'react'

type ButtonProps = {
    children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button>
            {children}
        </button>
    )
}

export { Button }
