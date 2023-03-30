/** @jsxImportSource @emotion/react */
import { createElement } from 'react';
import { css } from '@emotion/react';
import * as svg from './svg';

export interface IconBoxProps {
  name: keyof typeof svg;
  fixStroke?: boolean;
  strokeWidth?: number;
  rotate?: number;
  width?: string;
  height?: string;
  color?: string;
  fillColor?: string;
  className?: string;
}

const iconStyle = (
  fixStroke: boolean,
  strokeWidth: number,
  rotate: number,
  width?: string,
  height?: string,
  color?: string,
  fillColor?: string,
) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  svg {
    transform: rotate(${rotate}deg);
    width: ${width};
    height: ${height};

    path,
    circle {
      stroke: ${color};
      fill: ${fillColor};

      ${fixStroke &&
      css`
        stroke-width: ${strokeWidth || 1};
        vector-effect: non-scaling-stroke;
      `}
    }
  }
`;

const Icon = ({
  name,
  width,
  height,
  color,
  className,
  fixStroke = true,
  strokeWidth = 1,
  rotate = 0,
  fillColor,
}: IconBoxProps) => (
  <div
    css={iconStyle(fixStroke, strokeWidth, rotate, width, height, color, fillColor)}
    className={className}
  >
    {createElement(svg[name])}
  </div>
);

export default Icon;
