// import * as React from 'react';
// import { ReactNode } from 'react';

// type ButtonProps = {
//     children: ReactNode;
//     onClick?: () => void;
//     className?: string;
//     style?: React.CSSProperties;
// };

// const Button = ({ children, onClick, className, style }: ButtonProps) => {
//     return (
//         <button
//             onClick={onClick}
//             style={{
//                 backgroundColor: "#03b4ff",
//                 fontSize: "15px",
//                 padding: "1rem 2rem",
//                 cursor: "pointer",
//                 borderRadius: "10px",
//                 outline: "none",
//                 border: "transparent",
//                 ...style
//             }}
//             className=""
//         >
//             {children}
//         </button>
//     );
// };

// export { Button };


import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
  icon?: ReactNode;
};

const Button = ({
  children,
  onClick,
  className,
  style,
  disabled = false,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  icon,
}: ButtonProps) => {
  const baseStyles: React.CSSProperties = {
    fontWeight: 'bold',
    borderRadius: '0.375rem',
    outline: 'none',
    padding: '0.5rem 1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sizeStyles: { [key: string]: React.CSSProperties } = {
    small: { fontSize: '0.875rem', padding: '0.25rem 0.5rem' },
    medium: { fontSize: '1rem', padding: '0.5rem 1rem' },
    large: { fontSize: '1.125rem', padding: '0.75rem 1.5rem' },
  };

  const variantStyles: { [key: string]: React.CSSProperties } = {
    primary: { backgroundColor: '#3b82f6', color: '#ffffff', border: 'none' },
    secondary: { backgroundColor: '#6b7280', color: '#ffffff', border: 'none' },
    danger: { backgroundColor: '#ef4444', color: '#ffffff', border: 'none' },
  };

  const fullWidthStyles: React.CSSProperties = fullWidth ? { width: '100%' } : {};

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...fullWidthStyles,
    ...style,
  };

  return (
    <button
      onClick={onClick}
      style={combinedStyles}
      disabled={disabled}
      type={type}
      className={className}
    >
      {icon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}
      {children}
    </button>
  );
};

export { Button };
