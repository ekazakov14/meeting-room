import React from 'react';

type Props = {
  fill: string,
  width: number,
  height: number,
};

const AngleRight = ({fill, width, height}: Props) => (
  <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 7 12">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeOpacity="0.427536232">
          <g transform="translate(-207.000000, -88.000000)" stroke={fill} stroke-width="2">
              <g transform="translate(24.000000, 82.000000)">
                  <g transform="translate(179.000000, 7.000000)">
                      <polyline transform="translate(5.000000, 5.000000) rotate(-135.000000) translate(-5.000000, -5.000000) " points="8 8 2 8 2 2 2 2"></polyline>
                  </g>
              </g>
          </g>
      </g>
  </svg>
);

export default AngleRight;