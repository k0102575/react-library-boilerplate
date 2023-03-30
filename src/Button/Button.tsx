/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

/*
  Interface
*/
export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

/*
  Style
*/
const ButtonStyle = () => css`
  width: 500px;
  height: 50px;
  background-color: lightblue;
`;

/*
  Component
*/
const Button = ({ className, children = 'Button', onClick }: ButtonProps) => {
  return (
    <button className={className} css={ButtonStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
