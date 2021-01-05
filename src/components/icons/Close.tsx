import React from 'react';

type Props = {
  width: number,
  height: number,
  color: string,
};

const Close = ({width, height, color}: Props) => (
  <svg viewBox="0 0 24 24" fill={color} width={width} height={height}>
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
    </path>
  </svg>
);

export default Close;