import { ReactNode } from 'react';

/*
  Interface
*/
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children = "Button", onClick }: ButtonProps) => {
  return <div onClick={onClick}>{children}</div>;
};

export default Button;
