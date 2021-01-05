import React from 'react';

type Props = {
  width: number,
  height: number,
  color: string,
};

const Calendar = ({width, height, color}: Props) => (
  <svg viewBox="0 0 12 12" fill={color} width={width} height={height}>
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <g transform="translate(-140.000000, -76.000000)">
            <g transform="translate(138.000000, 74.000000)">
                <rect x="0" y="0" width="16" height="16"></rect>
                <path d="M3,6 L3,13 L13,13 L13,6 L3,6 Z M12,3 L14,3 L14,14 L2,14 L2,3 L4,3 L4,2 L6,2 L6,3 L10,3 L10,2 L12,2 L12,3 Z M4,7 L4,9 L6,9 L6,7 L4,7 Z M7,7 L7,9 L9,9 L9,7 L7,7 Z M4,10 L4,12 L6,12 L6,10 L4,10 Z"fill="#000000" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
  </svg>
);

export default Calendar;