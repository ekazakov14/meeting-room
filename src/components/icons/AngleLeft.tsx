import React from 'react';

type Props = {
  width: number,
  height: number,
  color: string,
};

const AngleLeft = ({width, height, color}: Props) => (
  <svg viewBox="0 0 24 24" fill={color} width={width} height={height}>
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
  </svg>
);

export default AngleLeft;